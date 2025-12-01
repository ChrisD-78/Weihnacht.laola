// Netlify Function: Challenge-Ergebnisse verwalten
const { getDb } = require('./db.js');

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

    if (event.httpMethod === 'GET') {
      // Alle abgeschlossenen Challenges abrufen
      const challenges = await sql`
        SELECT challenge_id, completed, completed_at
        FROM challenge_results
        WHERE user_id = ${userId}
        ORDER BY challenge_id ASC
      `;

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ challenges }),
      };
    }

    if (event.httpMethod === 'POST') {
      // Challenge als abgeschlossen markieren
      const { challenge_id, user_id, user_name } = JSON.parse(event.body);

      if (!challenge_id) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'challenge_id is required' }),
        };
      }

      const finalUserId = user_id || 'anonymous';
      const finalUserName = user_name || 'Unbekannt';

      // User in quiz_users Tabelle speichern/aktualisieren
      await sql`
        INSERT INTO quiz_users (user_id, name)
        VALUES (${finalUserId}, ${finalUserName})
        ON CONFLICT (user_id) DO UPDATE SET name = EXCLUDED.name
      `;

      await sql`
        INSERT INTO challenge_results (user_id, challenge_id, completed, completed_at)
        VALUES (${finalUserId}, ${challenge_id}, TRUE, CURRENT_TIMESTAMP)
        ON CONFLICT (user_id, challenge_id) 
        DO UPDATE SET completed = TRUE, completed_at = CURRENT_TIMESTAMP
      `;

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, challenge_id }),
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

