const express = require("express");
const cors = require("cors");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");

app
	.use(cors())
	.use(express.json())
	.use(express.urlencoded({ extended: true }))
  .use("/docs-api", swaggerUi.serve, swaggerUi.setup(swaggerFile))
	.use("/", require("./routes"))
  ;

const db = require("./models");
db.mongoose
	.connect(db.url, {
		useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'assignments'
	})
	.then(() => {
		console.log("Connected to the database!");
	})
	.catch((err) => {
		console.log("Cannot connect to the database!", err);
		process.exit();
	});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
  console.log(`Root: http://localhost:${PORT}`);
  console.log(`API documentation: http://localhost:${PORT}/docs-api`);
});