const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
	userID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: false,
		trim: true,
	},
	productImage: {
		type: String,
		required: false,
		trim: true,
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
});

userSchema.plugin(passportLocalMongoose, {
	usernameField: "userID",
});
module.exports = mongoose.model('ProductUploads', uploadSchema);

