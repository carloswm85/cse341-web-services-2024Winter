const swaggerAutogen = require("swagger-autogen")();
const dotenv = require("dotenv");
dotenv.config();

const isLocalHost = false;
const PORT = process.env.PORT || 8080;

console.log(`Is localhost: ${isLocalHost}`);

const HOSTING = isLocalHost
	? `localhost:${PORT}`
	: "w07-personal-assignment-swagger.onrender.com";
const SCHEMES = isLocalHost ? ["http", "https"] : ["https", "http"];

const doc = {
	info: {
		title: "Content Management Systes API (CMS)",
		description:
			"The CMS API is designed to facilitate content management operations for a web-based application. It provides endpoints to manage articles, allowing users to retrieve a list of articles and create new articles. The API is defined using the OpenAPI Specification (OAS), making it easy to understand and integrate into various applications.",
	},
	contact: {
		name: "Carlos Mercado",
		email: "carlos.washington.mercado@gmail.com",
	},
	license: {
		name: "Your License",
		url: "https://en.wikipedia.org/wiki/MIT_License",
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
	tags: [
		{
			name: "Articles",
			description: "Endpoints related to managing articles",
		},
	],
	externalDocs: {
		description: "CSE341 - Lesson 7: OAuth",
		url: "https://cse341.netlify.app/lesson7",
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
