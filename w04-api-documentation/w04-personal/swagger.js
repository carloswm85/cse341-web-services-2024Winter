const swaggerAutogen = require("swagger-autogen")();
const dotenv = require("dotenv");
dotenv.config();

const isLocalHost = false;
const PORT = process.env.PORT || 8080;

console.log(`Is localhost: ${isLocalHost}`);

const HOSTING = isLocalHost
	? `localhost:${PORT}`
	: "w04-personal-assignment-swagger-client.onrender.com";
const SCHEMES = isLocalHost ? ["http", "https"] : ["https", "http"];

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
