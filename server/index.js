require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');

const controller = require('./controllers/controller');

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
});

app.get('/api/races', controller.getRaces);
app.get('/api/races/:num', controller.getRace);
app.post('/api/races', controller.addRace);

const PORT = 3005;
app.listen(PORT, console.log(`Server listing on port ${PORT}`));