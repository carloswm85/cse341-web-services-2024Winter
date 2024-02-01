const db = require("../models");
const TempleMod = db.templesModel;

const apiKey =
	"Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N";

exports.create = (req, res) => {
	// #swagger.tags = ['Teacher']

	// Validate request
	if (!req.body.name) {
		res.status(400).send({ message: "Content can not be empty!" });
		return;
	}

	// Create a Temple
	const temple = new TempleMod({
		temple_id: req.body.temple_id,
		additionalInfo: req.body.additionalInfo,
		name: req.body.name,
		location: req.body.location,
		dedicated: req.body.description,
	});

	// Save Temple in the database
	temple
		.save(temple)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while creating the Temple.",
			});
		});
};

exports.findAll = (req, res) => {
	// #swagger.tags = ['Teacher']

	console.log(req.header("apiKey"));
	if (req.header("apiKey") === apiKey) {
		TempleMod.find(
			{},
			{
				temple_id: 1,
				name: 1,
				location: 1,
				dedicated: 1,
				additionalInfo: 1,
				_id: 0,
			}
		)
			.then((data) => {
				res.send(data);
			})
			.catch((err) => {
				res.status(500).send({
					message:
						err.message || "Some error occurred while retrieving temples.",
				});
			});
	} else {
		res.send("Invalid apiKey, please read the documentation.");
	}
};

// Find a single Temple with an id
exports.findOne = (req, res) => {
	// #swagger.tags = ['Teacher']
	// #swagger.summary = 'Some summary...'
	// #swagger.description = 'Some description...'
	// #swagger.operationId = 'Your_operationId_here'
	// #swagger.deprecated = false
	// #swagger.ignore = false
	const temple_id = req.params.temple_id;
	if (req.header("apiKey") === apiKey) {
		TempleMod.find({ temple_id: temple_id })
			.then((data) => {
				if (!data)
					res
						.status(404)
						.send({ message: "Not found Temple with id " + temple_id });
				else res.send(data[0]);
			})
			.catch((err) => {
				res.status(500).send({
					message: "Error retrieving Temple with temple_id=" + temple_id,
				});
			});
	} else {
		res.send("Invalid apiKey, please read the documentation.");
	}
};

// === ASSIGNMENT --------------------------------------------------------------

// Update a Temple by the id in the request
// https://mongoosejs.com/docs/tutorials/findoneandupdate.html
// https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()
https: exports.update = async (req, res) => {
	// #swagger.tags = ['Assignment']
	if (!req.body) {
		return res.status(400).send({
			message: "Data to update can not be empty!",
		});
	}

	const id = req.params.temple_id;

	const filter = { temple_id: id };
	const update = {
		additionalInfo: req.body.additionalInfo,
		name: req.body.name,
		location: req.body.location,
		dedicated: req.body.description,
	};

	TempleMod.findOneAndUpdate(filter, update)
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot update Temple with id=${id}. Maybe Temple was not found!`,
				});
			} else res.send({ message: "Temple was updated successfully." });
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error updating Temple with id=" + id,
			});
		});
};

// Delete a Temple with the specified id in the request
// https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()
exports.delete = (req, res) => {
	// #swagger.tags = ['Assignment']

	const id = req.params.temple_id;

	TempleMod.findByIdAndDelete(id)
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot delete Temple with id=${id}. Maybe Temple was not found!`,
				});
			} else {
				res.send({
					message: "Temple was deleted successfully!",
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Could not delete Temple with id=" + id,
			});
		});
};

// Delete all Temples from the database
// https://mongoosejs.com/docs/api/model.html#Model.deleteMany()
exports.deleteAll = (req, res) => {
	// #swagger.tags = ['Assignment']

	TempleMod.deleteMany({})
		.then((data) => {
			res.send({
				message: `${data.deletedCount} Temples were deleted successfully!`,
			});
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while removing all temple.",
			});
		});
};

// Find all published Temples
exports.findAllAdditionalInfo = (req, res) => {
	// #swagger.tags = ['Assignment']

	TempleMod.find({ additionalInfo: true })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving temple.",
			});
		});
};
