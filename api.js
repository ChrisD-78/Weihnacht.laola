// API Helper Functions für Backend-Kommunikation

const API_BASE = '/.netlify/functions';

// Fallback zu localStorage wenn API nicht verfügbar ist
const useLocalStorage = false; // Setze auf true für lokale Entwicklung ohne Backend

// Geöffnete Türchen
export async function getOpenedDoors() {
  if (useLocalStorage) {
    return JSON.parse(localStorage.getItem('openedDoors') || '[]');
  }

  try {
    const response = await fetch(`${API_BASE}/opened-doors`);
    if (!response.ok) throw new Error('Failed to fetch opened doors');
    const data = await response.json();
    return data.doors || [];
  } catch (error) {
    console.error('Error fetching opened doors:', error);
    // Fallback zu localStorage bei Fehler
    return JSON.parse(localStorage.getItem('openedDoors') || '[]');
  }
}

export async function saveOpenedDoor(day) {
  if (useLocalStorage) {
    const doors = JSON.parse(localStorage.getItem('openedDoors') || '[]');
    if (!doors.includes(day)) {
      doors.push(day);
      localStorage.setItem('openedDoors', JSON.stringify(doors));
    }
    return true;
  }

  try {
    const response = await fetch(`${API_BASE}/opened-doors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ day }),
    });
    
    if (!response.ok) throw new Error('Failed to save opened door');
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error saving opened door:', error);
    // Fallback zu localStorage bei Fehler
    const doors = JSON.parse(localStorage.getItem('openedDoors') || '[]');
    if (!doors.includes(day)) {
      doors.push(day);
      localStorage.setItem('openedDoors', JSON.stringify(doors));
    }
    return true;
  }
}

// Quiz-Ergebnisse
export async function getQuizResults(day = null) {
  if (useLocalStorage) {
    const key = day ? `quiz_results_${day}` : 'quiz_results_all';
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  try {
    const url = day 
      ? `${API_BASE}/quiz-results?day=${day}`
      : `${API_BASE}/quiz-results`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch quiz results');
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching quiz results:', error);
    return [];
  }
}

export async function saveQuizResult(day, question_id, answer, is_correct, user_id, user_name) {
  if (useLocalStorage) {
    const key = `quiz_results_${day}`;
    const results = JSON.parse(localStorage.getItem(key) || '[]');
    results.push({ day, question_id, answer, is_correct });
    localStorage.setItem(key, JSON.stringify(results));
    return true;
  }

  try {
    const response = await fetch(`${API_BASE}/quiz-results`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ day, question_id, answer, is_correct, user_id, user_name }),
    });
    
    if (!response.ok) throw new Error('Failed to save quiz result');
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error saving quiz result:', error);
    return false;
  }
}

// Challenges
export async function getChallenges() {
  if (useLocalStorage) {
    return JSON.parse(localStorage.getItem('challenges') || '[]');
  }

  try {
    const response = await fetch(`${API_BASE}/challenges`);
    if (!response.ok) throw new Error('Failed to fetch challenges');
    const data = await response.json();
    return data.challenges || [];
  } catch (error) {
    console.error('Error fetching challenges:', error);
    return [];
  }
}

export async function saveChallenge(challenge_id, user_id, user_name) {
  if (useLocalStorage) {
    const challenges = JSON.parse(localStorage.getItem('challenges') || '[]');
    if (!challenges.includes(challenge_id)) {
      challenges.push(challenge_id);
      localStorage.setItem('challenges', JSON.stringify(challenges));
    }
    return true;
  }

  try {
    const response = await fetch(`${API_BASE}/challenges`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ challenge_id, user_id, user_name }),
    });
    
    if (!response.ok) throw new Error('Failed to save challenge');
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error saving challenge:', error);
    return false;
  }
}

// Ranking aus Neon-Datenbank
export async function getRanking() {
  try {
    const response = await fetch(`${API_BASE}/ranking`);
    if (!response.ok) throw new Error('Failed to fetch ranking');
    const data = await response.json();
    return data.ranking || [];
  } catch (error) {
    console.error('Error fetching ranking:', error);
    return [];
  }
}



