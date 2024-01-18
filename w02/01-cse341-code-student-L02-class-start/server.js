const express = require('express');
const app = express();

const mongodb = require("./db/connect.js");

mongodb.getDb();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'))

mongodb.initDb((err, mongodb) => {
	if (err) {
		console.log(err);
	} else {
		app.listen(port, () => {
			console.log(`Running on port ${port}`);
		});
		// app.listen(3000);
	}
});