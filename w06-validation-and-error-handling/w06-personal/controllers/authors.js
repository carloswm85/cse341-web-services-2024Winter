const mongodbInstance = require("../db/connect");
const { ObjectId } = require("mongodb");

const DATABASE = process.env.DATABASE_NAME;
const COLLECTION = process.env.COLLECTION_ONE;

// GET LIST
const getData = async (req, res, next) => {
	// #swagger.tags = ['Authors']

	const response = await mongodbInstance
		.getDb()
		.db(DATABASE)
		.collection(COLLECTION)
		.find();

	response.toArray().then((lists) => {
		res.setHeader("Content-Type", "application/json");
		res.status(200).json(lists);
	});
};

// GET ITEM
const getItem = async (req, res, next) => {
	// #swagger.tags = ['Authors']

	var selectedId = req.params.id;
	const collection = await mongodbInstance
		.getDb()
		.db(DATABASE)
		.collection(COLLECTION);

	var response = await collection.findOne({ _id: new ObjectId(selectedId) });

	if (response != undefined) {
		res.setHeader("Content-Type", "application/json");
		res.json(response);
		console.log("Item retrieved.");
	} else {
		res.status(404).json({ message: "Does not exist" });
	}
};

// POST
const postItem = async (req, res, next) => {
	// #swagger.tags = ['Authors']

	const collection = await mongodbInstance
		.getDb()
		.db(DATABASE)
		.collection(COLLECTION);

	var newAuthor = {
		author_name: req.body.author_name,
		author_email: req.body.author_email,
		author_image: req.body.author_image
	};

	var response = await collection.insertOne(newAuthor);

	if (response != undefined) {
		res.status(201).json(response);
		console.log(response.insertedId);
	} else {
		res.status(400).json({ message: "BAD REQUEST" });
	}
};

// // PUT
// const putItem = async (req, res, next) => {
// 	// #swagger.tags = ['Authors']

// 	// IMPORTANT
// 	// This comment is required for the swagger-autogen tool
// 	/*  #swagger.parameters['body'] = {
//             in: 'body',
//             required: false,
//             schema: {
// 								author_name: "any",
// 								author_email: "any",
// 								author_image: "any"
//             }
//   } */

// 	const collection = await mongodbInstance
// 		.getDb()
// 		.db(DATABASE)
// 		.collection(COLLECTION);

// 	try {
// 		const selectedId = req.params._id;
// 		// Create a filter for items with the selected id
// 		const filter = { _id: new ObjectId(selectedId) };

// 		// Specify the update to set a value for the plot field
// 		const updatedAuthor = {};

// 		// Type alias UpdateFilter<TSchema>:
// 		// https://mongodb.github.io/node-mongodb-native/6.3/types/UpdateFilter.html
// 		const updateDoc = {
// 			$set: updatedAuthor,
// 		};

// 		for (const key of Object.keys(req.body)) {
// 			if (req.body[key] !== null) {
// 				updatedAuthor[key] = req.body[key];
// 			}
// 		}

// 		// Set the upsert option to insert a document if no documents match the filter
// 		// Interface FindOneAndUpdateOptions:
// 		// https://mongodb.github.io/node-mongodb-native/4.0/interfaces/findoneandupdateoptions.html
// 		const options = { upsert: false };

// 		// Update the first document that matches the filter
// 		var response = await collection.findOneAndUpdate(
// 			filter,
// 			updateDoc,
// 			options
// 		);

// 		if (response != undefined) {
// 			// Print the number of matching and modified documents
// 			console.log(
// 				`${response.matchedCount} document(s) matched the filter, updated ${response.modifiedCount} document(s)`
// 			);
// 			res.status(200);
// 			res.json(response);
// 			console.log("Item was updated.");
// 		}
// 	} catch (error) {
// 		res.status(400).json({ message: "BAD REQUEST" });
// 	}
// };

// // DELETE
// const deleteItem = async (req, res, next) => {
// 	// #swagger.tags = ['Authors']
// 	var selectedId = req.params._id;
// 	const collection = await mongodbInstance
// 		.getDb()
// 		.db(DATABASE)
// 		.collection(COLLECTION);

// 	try {
// 		// Delete the item by ID
// 		const response = await collection.deleteOne({
// 			_id: new ObjectId(selectedId),
// 		});

// 		if (response.deletedCount === 1) {
// 			res.status(200).json({
// 				message: `Item was deleted successfully.`,
// 			});
// 		} else {
// 			res.status(404).json({ message: "Item not found" });
// 		}
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ message: "Internal server error" });
// 	}
// };

// module.exports = { getData, getItem, deleteItem, postItem, putItem };
module.exports = { getData, getItem, postItem };
