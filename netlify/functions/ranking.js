// Netlify Function: Ranking aus Neon-Datenbank
const { getDb } = require('./db.js');

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const sql = getDb();

    // Ranking basierend auf Quiz-Ergebnissen (Anzahl korrekter Antworten)
    const rows = await sql`
      WITH quiz_points AS (
        SELECT user_id, COUNT(*)::int AS quiz_points
        FROM quiz_results
        WHERE is_correct = true
        GROUP BY user_id
      )
      SELECT 
        u.user_id,
        u.name,
        COALESCE(q.quiz_points, 0) AS quiz_points
      FROM quiz_users u
      LEFT JOIN quiz_points q USING (user_id)
      ORDER BY quiz_points DESC, u.name ASC
    `;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ranking: rows }),
    };
  } catch (error) {
    console.error('Error fetching ranking:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error', message: error.message }),
    };
  }
};


