CREATE TABLE races (
    id SERIAL PRIMARY KEY, 
    num INT, 
    abbrev VARCHAR(3), 
    race_name VARCHAR(60), 
    circuit VARCHAR(40), 
    year INT, 
    winner VARCHAR(20), 
    nationality VARCHAR(3), 
    team VARCHAR(30), 
    mfg VARCHAR(10), 
    flag_url VARCHAR(12), 
    winner_abbrev VARCHAR(4), 
    winner_short VARCHAR(12), 
    mfg_abbrev VARCHAR(3), 
    mfg_logo_url VARCHAR(12)
);