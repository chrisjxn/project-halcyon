require('dotenv').config();
const express = require('express');
const massive = require('massive');

const app = express();

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
});

const PORT = 3005;
app.listen(PORT, console.log(`Server listing on port ${PORT}`));