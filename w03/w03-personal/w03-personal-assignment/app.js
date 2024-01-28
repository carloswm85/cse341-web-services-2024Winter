const express = require('express');
const bodyParser = require('body-parser');

const connection = require('./db/connect');
const routes = require('./routes/contactsRoute');

const PORT = process.env.PORT || 8080;
const USERNAME = process.env.USER_NAME;
const PASS = process.env.USER_PASSWORD;
const URL = process.env.CLUSTER_URL;
const ROUTE = process.env.ROUTE;
const SUBROUTE = process.env.SUBROUTE;

const app = express();

app
	.use(bodyParser.json())
	.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		next();
	})
	.use('/contactos', routes);

connection.initDb((err, mongodb) => {
	if (err) {
		console.log(err);
	} else {
		app.listen(PORT);
		console.log(`Connected to DB and listening on ${PORT}`);
		console.log(`http://localhost:${PORT}/${ROUTE}/${SUBROUTE}`);
	}
})