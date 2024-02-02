const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const connection = require("./db/connect");
const routes = require("./routes");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");

const PORT = process.env.PORT || 8080;
const USERNAME = process.env.USER_NAME;
const PASS = process.env.USER_PASSWORD;
const URL = process.env.CLUSTER_URL;
const ROUTE = process.env.ROUTE;
const SUBROUTE = process.env.SUBROUTE;

const app = express();

app
	.use(bodyParser.json())
	// .use(cors())
	// .use((req, res, next) => {
	// 	res.setHeader("Access-Control-Allow-Origin", "*");
	// 	res.setHeader(
	// 		"Access-Control-Allow-Headers",
	// 	// 	// "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
	// 		"Content-Type"
	// 	);
	// 	// res.setHeader("Content-Type", "application/json");
	// 	res.setHeader(
	// 		"Access-Control-Allow-Methods",
	// 		"GET, POST, PUT, DELETE, OPTIONS"
	// 	);
	// next();
	// })
	.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
	.use(`/`, routes);

connection.initDb((err, mongodb) => {
	if (err) {
		console.log(err);
	} else {
		app.listen(PORT);
		console.log(`Connected to DB and listening on ${PORT}`);
		console.log(`http://localhost:${PORT}/${ROUTE}/${SUBROUTE}/list`);
		console.log(`API documentation: http://localhost:${PORT}/api-docs`);
	}
});
