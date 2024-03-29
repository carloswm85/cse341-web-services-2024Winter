const swaggerAutogen = require("swagger-autogen")();

const PORT = process.env.PORT || 8080;

const doc = {
	info: {
		title: "Temples API",
		description: "This API is made for CSE341 Web Services class. Winter 2024.\napiKey = Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N",
	},
	host: `localhost:${PORT}`,
	schemes: ["http"],
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