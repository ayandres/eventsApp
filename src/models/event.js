const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	cost: {
		type: Number,
		required: true,
		min: [1, 'Must be greater than 0'],
	},
	category: {
		type: String,
		required: true,
		enum: {
			values: ['business', 'casual', 'party', 'general'],
			message: '{VALUE} is not supported as a category value',
		},
	},
	image: {
		type: String,
	},
});

const event = mongoose.model('event', eventSchema);
module.exports = event;
