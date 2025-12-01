-- Neon Database Schema für LA OLA Weihnachtskalender

-- Tabelle für geöffnete Türchen
CREATE TABLE IF NOT EXISTS opened_doors (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    day INTEGER NOT NULL CHECK (day >= 1 AND day <= 24),
    opened_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, day)
);

-- Tabelle für Quiz-Ergebnisse
CREATE TABLE IF NOT EXISTS quiz_results (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    day INTEGER NOT NULL CHECK (day >= 1 AND day <= 24),
    question_id INTEGER NOT NULL,
    answer INTEGER NOT NULL,
    is_correct BOOLEAN NOT NULL,
    answered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabelle für Challenge-Ergebnisse
CREATE TABLE IF NOT EXISTS challenge_results (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    challenge_id INTEGER NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMP,
    UNIQUE(user_id, challenge_id)
);

-- Tabelle für Benutzer-Sessions (optional, für Statistiken)
CREATE TABLE IF NOT EXISTS user_sessions (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    first_visit TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_visit TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_visits INTEGER DEFAULT 1
);

-- Indizes für bessere Performance
CREATE INDEX IF NOT EXISTS idx_opened_doors_user_id ON opened_doors(user_id);
CREATE INDEX IF NOT EXISTS idx_opened_doors_day ON opened_doors(day);
CREATE INDEX IF NOT EXISTS idx_quiz_results_user_id ON quiz_results(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_day ON quiz_results(day);
CREATE INDEX IF NOT EXISTS idx_challenge_results_user_id ON challenge_results(user_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON user_sessions(user_id);


