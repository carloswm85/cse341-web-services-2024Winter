"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// https://www.npmjs.com/package/mongoose
var TaskSchema = new Schema({
	name: {
		type: String,
		required: "Kindly enter the name of the task",
	},
	Created_date: {
		type: Date,
		default: Date.now,
	},
	status: {
		type: [
			{
				type: String,
				enum: ["pending", "ongoing", "completed"],
			},
		],
		default: ["pending"],
	},
});

module.exports = mongoose.model("Tasks", TaskSchema);

/**
 * From the code above, we required the mongoose in our file and then, we create a model of how our collection should look like.
 * As you can see, it the task collection(table) will contain a name: a string, and the date it was created.
 * It also contains task status which we have defined as pending - a default value for every task created.
 */