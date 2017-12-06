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
    mfg VARCHAR(10)
);