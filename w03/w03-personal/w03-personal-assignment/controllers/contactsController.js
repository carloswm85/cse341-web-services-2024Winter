const mongodbInstance = require("../db/connect");
const { ObjectId } = require("mongodb");

const DATABASE = process.env.DATABASE_NAME;
const COLLECTION = process.env.COLLECTION_NAME;

const getData = async (req, res, next) => {
	const result = await mongodbInstance
		.getDb()
		.db(DATABASE)
		.collection(COLLECTION)
		.find();

	result.toArray().then((lists) => {
		res.setHeader("Content-Type", "application/json");
		res.status(200).json(lists);
	});
};

const getItem = async (req, res, next) => {
	var selectedId = req.params.id;
	const collection = await mongodbInstance
		.getDb()
		.db(DATABASE)
		.collection(COLLECTION);

	var result = await collection.findOne({ _id: new ObjectId(selectedId) });

	if (result != undefined) {
		res.setHeader("Content-Type", "application/json");
		res.json(result);
	} else {
		res.status(404).json({ message: "Does not exist" });
	}
};

// POST
const postItem = async (req, res, next) => {
	const collection = await mongodbInstance
		.getDb()
		.db(DATABASE)
		.collection(COLLECTION);
	
	var newItem = req.body;
	var result = await collection.insertOne(newItem);

	if (result != undefined) {
		res.status(201).json({ message: "Operation successful" });
		console.log(result);
	} else {
		res.status(400).json({ message: "BAD REQUEST" });
	}
};

// PUT
const putItem = async (req, res, next) => {
	const collection = await mongodbInstance
		.getDb()
		.db(DATABASE)
		.collection(COLLECTION);

	var newItem = req.body;
	var result = await collection.insertOne(newItem);

	if (result != undefined) {
		res.status(201).json({ message: "Operation successful" });
		console.log(result);
	} else {
		res.status(400).json({ message: "BAD REQUEST" });
	}
};

// DELETE
const deleteItem = async (req, res, next) => {
	var selectedId = req.params.id;
	const collection = await mongodbInstance
		.getDb()
		.db(DATABASE)
		.collection(COLLECTION);

	try {
		// Delete the item by ID
		const result = await collection.deleteOne({
			_id: new ObjectId(selectedId)
		});

		if (result.deletedCount === 1) {
			res.status(200).json({ message: "Item deleted successfully" });
		} else {
			res.status(404).json({ message: "Item not found" });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

module.exports = { getData, getItem, deleteItem, postItem, putItem };
