const dotenv = require("dotenv");
dotenv.config();
const mongoClient = require("mongodb").MongoClient;

require("dotenv").config();

// mongodb+srv://carloswcse341:<password>@cluster0-cse341-y2024-w.ecqjyt4.mongodb.net/
const mongoDB_USER = process.env.DB_USER;
const mongoDB_PASS = process.env.DB_PASS;
const mongoDB_NAME = process.env.DB_NAME;
const mongoDB_PORT = process.env.DB_PORT;

const mongoConnectionString = `mongodb+srv://
		${mongoDB_USER}:
		${mongoDB_PASS}@
		${mongoDB_NAME}:
		${mongoDB_PORT}`;

let _db;

const initDb = (callback) => {
	if (_db) {
		console.log("Db is already initialized!");
		return callback(null, _db);
	}
	mongoClient
		.connect(mongoConnectionString)
		.then((client) => {
			_db = client;
			callback(null, _db);
		})
		.catch((err) => {
			callback(err);
		});
};

const getDb = () => {
	if (!_db) {
		throw Error("Db not initialized");
	}
	return _db;
};

module.exports = {
	initDb,
	getDb,
};
