// name
// release date
// language
// author

const express = require('express');
const bodyParser = require('body-parser');
require('./database');
const routes = require('./routes');

let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(routes)
app.use('/', (req, res) => {
    res.status(200).send('OK');
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})

