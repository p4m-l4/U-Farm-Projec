const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
	userID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: false,
		trim: true,
	},
	productImage: {
		type: String,
		required: false,
	},
	productName: {
		type: String,
		required: false,
		trim: true,
	},
	productType: {
		type: String,
		required: false,
		trim: true,
	},
	uploadDate: {
		type: Date,
		required: false,
	},
	status: {
		type: String,
		default: "Pending",
		enum: ["Pending", "Approved"],
	},
	productName: {
		type: String,
		required: false,
		trim: true,
	},
	productGroup: {
		type: String,
		required: false,
		trim: true,
	},
	unitCost: {
		type: Number,
		required: false,
		trim: true,
	},
	quantityAvailable: {
		type: Number,
		required: false,
		trim: true,
	},
	delivery: {
		type: String,
		required: false,
		trim: true,
	},
	ward: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	deliveryDirections: {
		type: String,
		required: false,
		trim: true,
	},
});

module.exports = mongoose.model('ProductUpload', uploadSchema);

