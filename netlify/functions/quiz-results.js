// Netlify Function: Quiz-Ergebnisse speichern
const { getDb } = require('./db.js');

function getUserId(event) {
  const ip = event.headers['x-forwarded-for'] || event.headers['x-nf-client-connection-ip'] || 'unknown';
  const ua = event.headers['user-agent'] || 'unknown';
  return `user_${Buffer.from(`${ip}_${ua}`).toString('base64').substring(0, 32)}`;
}

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json',
  };

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
      // Quiz-Ergebnisse für einen Tag abrufen
      const { day } = event.queryStringParameters || {};
      
      if (day) {
        const results = await sql`
          SELECT question_id, answer, is_correct, answered_at
          FROM quiz_results
          WHERE user_id = ${userId} AND day = ${parseInt(day)}
          ORDER BY question_id ASC
        `;
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ results }),
        };
      }

      // Alle Ergebnisse abrufen
      const allResults = await sql`
        SELECT day, question_id, answer, is_correct
        FROM quiz_results
        WHERE user_id = ${userId}
        ORDER BY day ASC, question_id ASC
      `;
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ results: allResults }),
      };
    }

    if (event.httpMethod === 'POST') {
      // Quiz-Antwort speichern
      const { day, question_id, answer, is_correct } = JSON.parse(event.body);

      if (!day || day < 1 || day > 24) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Invalid day' }),
        };
      }

      await sql`
        INSERT INTO quiz_results (user_id, day, question_id, answer, is_correct)
        VALUES (${userId}, ${day}, ${question_id}, ${answer}, ${is_correct})
      `;

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true }),
      };
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

