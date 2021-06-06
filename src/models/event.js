const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'title required'],
		minLength: [2, '2 char minimum'],
		trim: true,
	},
	cost: {
		type: Number,
		min: [1, 'Integer must be greater than zero'],
		trim: true,
	},
	category: {
		type: String,
		required: [
			true,
			'must have one of the following, business, casual or general',
		],
		enum: ['business', 'casual', 'other'],
		lowercase: true,
		trim: true,
	},
	image: {
		type: String,
		trim: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
