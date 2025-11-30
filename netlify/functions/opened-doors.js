// Netlify Function: Geöffnete Türchen verwalten
const { getDb } = require('./db.js');

// Helper: User-ID aus Request extrahieren (kann später durch Auth erweitert werden)
function getUserId(event) {
  // Für jetzt: Verwende IP + User-Agent als temporäre User-ID
  // In Produktion sollte hier eine echte User-Authentifizierung verwendet werden
  const ip = event.headers['x-forwarded-for'] || event.headers['x-nf-client-connection-ip'] || 'unknown';
  const ua = event.headers['user-agent'] || 'unknown';
  return `user_${Buffer.from(`${ip}_${ua}`).toString('base64').substring(0, 32)}`;
}

exports.handler = async (event, context) => {
  // CORS Headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    const sql = getDb();
    const userId = getUserId(event);

    if (event.httpMethod === 'GET') {
      // Alle geöffneten Türchen für diesen User abrufen
      const doors = await sql`
        SELECT day, opened_at 
        FROM opened_doors 
        WHERE user_id = ${userId}
        ORDER BY day ASC
      `;

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ doors: doors.map(d => d.day) }),
      };
    }

    if (event.httpMethod === 'POST') {
      // Neues Türchen als geöffnet markieren
      const { day } = JSON.parse(event.body);

      if (!day || day < 1 || day > 24) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Invalid day. Must be between 1 and 24.' }),
        };
      }

      try {
        await sql`
          INSERT INTO opened_doors (user_id, day)
          VALUES (${userId}, ${day})
          ON CONFLICT (user_id, day) DO NOTHING
        `;

        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, day }),
        };
      } catch (error) {
        // Wenn bereits geöffnet, ist das auch OK
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, day, alreadyOpened: true }),
        };
      }
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error', message: error.message }),
    };
  }
};

