const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
	userID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
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
	uploadDate: {
		type: Date,
		required: false,
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
	status: {
		type:String,
		default: "Pending",
		enum: ["Pending", "Approved"]
	}
});

module.exports = mongoose.model('ProductUpload', uploadSchema);

