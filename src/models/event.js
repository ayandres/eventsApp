const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	cost: {
		type: Number,
		min: [1, 'Integer must be greater than zero'],
		required: true,
	},
	category: {
		type: String,
		required: [
			true,
			'must have one of the following, business, casual , party or general',
		],
		enum: ['business', 'casual', 'party', 'other'],
		lowercase: true,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
});

const event = mongoose.model('event', eventSchema);

module.exports = event;
