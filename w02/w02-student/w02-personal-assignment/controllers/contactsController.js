const mongodbInstance = require("../db/connect");

const DATABASE = process.env.DATABASE_NAME;
const COLLECTION = process.env.COLLECTION_NAME;

const getData = async (req, res, next) => {
	const result = await mongodbInstance
		.getDb()
		.db(DATABASE)
		.collection(COLLECTION)
		.find();

	// console.log("RESULT: ");
	// console.log("object :>> ", result);

	result.toArray().then((lists) => {
		// console.log("LISTS: ");
		// console.log("object :>> ", lists);

		res.setHeader("Content-Type", "application/json");
		res.status(200).json(lists);
	});
};

const getItem = async (req, res, next) => {
	const result = await mongodbInstance
		.getDb()
		.db(DATABASE)
		.collection(COLLECTION)
		.find();

	result.toArray().then((lists) => {
		var itemId = lists[req.params.id];
		if (itemId != undefined) {
			res.setHeader("Content-Type", "application/json");
			res.json(itemId);
		} else {
			res.status(404).json('Does not exist');
		}
	});
};

module.exports = { getData, getItem };
