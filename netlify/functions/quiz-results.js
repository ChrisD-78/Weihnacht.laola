// Netlify Function: Quiz-Ergebnisse speichern
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
      // Für Ranking/Statistik können hier später alle Ergebnisse aggregiert werden
      const allResults = await sql`
        SELECT user_id, day, question_id, answer, is_correct
        FROM quiz_results
        ORDER BY user_id ASC, day ASC, question_id ASC
      `;
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ results: allResults }),
      };
    }

    if (event.httpMethod === 'POST') {
      // Quiz-Antwort speichern
      const { day, question_id, answer, is_correct, user_id, user_name } = JSON.parse(event.body);

      if (!day || day < 1 || day > 24) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Invalid day' }),
        };
      }

      // Fallback falls keine user_id übergeben wurde
      const finalUserId = user_id || 'anonymous';
      const finalUserName = user_name || 'Unbekannt';

      // User in quiz_users Tabelle speichern/aktualisieren
      await sql`
        INSERT INTO quiz_users (user_id, name)
        VALUES (${finalUserId}, ${finalUserName})
        ON CONFLICT (user_id) DO UPDATE SET name = EXCLUDED.name
      `;

      // Quiz-Ergebnis speichern
      await sql`
        INSERT INTO quiz_results (user_id, day, question_id, answer, is_correct)
        VALUES (${finalUserId}, ${day}, ${question_id}, ${answer}, ${is_correct})
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

