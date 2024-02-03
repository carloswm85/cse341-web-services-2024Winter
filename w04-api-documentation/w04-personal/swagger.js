const swaggerAutogen = require("swagger-autogen")();
const dotenv = require("dotenv");
dotenv.config();

const IS_PROD_HOST = Boolean(process.env.IS_PROD_HOST);
const PORT = process.env.PORT || 8080;

console.log(`Is localhost: ${IS_PROD_HOST}`);

const HOSTING = IS_PROD_HOST
	? "w04-personal-assignment-swagger-client.onrender.com"
	: `localhost:${PORT}`;
const SCHEMES = IS_PROD_HOST ? ["https", "http"] : ["http", "https"];

const doc = {
	info: {
		title: "Contacts API Title",
		description: "My API decription.",
	},
	host: HOSTING,
	schemes: SCHEMES,
	securityDefinitions: {
		api_key: {
			type: "apiKey",
			name: "api_key",
			in: "header",
		},
	},
};

const outputFile = "./swagger-output.json";
const routes = ["./routes/index.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);

// OPTIONALLY
// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });
