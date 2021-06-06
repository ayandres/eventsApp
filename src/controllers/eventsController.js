const event = require('../models/event');
const axios = require('axios');

exports.getEvents = async (req, res) => {
	try {
		let documents = await event.find();
		res.json(documents);
	} catch (err) {
		res.send(500).json({ message: err.message });
	}
};

exports.createEvent = async (req, res) => {
	try {
		const imageCategory = req.body.category;

		const getImage = async () => {
			const response = await axios.get(
				`https://source.unsplash.com/featured/?${imageCategory}`
			);
			return response.request.res.responseUrl;
		};

		let newEvent = await Event.create({ title, cost, category });
		res.json({ message: `Event successfully created!`, newEvent });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

exports.findEvent = async (req, res) => {
	try {
		const document = await event.findById(req.params.id);
		res.json(document);
	} catch (err) {
		res.send(err.message);
	}
};

exports.updateEvent = async (req, res) => {
	try {
		const document = await event.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		res.json(document);
	} catch (err) {
		res.send(err.message);
	}
};

exports.deleteEvent = async (req, res) => {
	try {
		const document = await event.findByIdAndDelete(req.params.id);
		res.send(`Event: '${document.title}' removed successfully`);
	} catch (err) {
		res.send('An error occurred.');
	}
};
