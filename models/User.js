const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: false,
		trim: true,
	},
	lastName: {
		type: String,
		required: false,
		trim: true,
	},
	gender: {
		type: String,
		required: false,
	},
	birthDate: {
		type: Date,
		required: false,
	},
	phoneNumber: {
		type: Number,
		required: false,
		trim: true,
	},
	NIN: {
		type: String,
		required: false,
		trim: true,
	},
	userID: {
		type: String,
		required: false,
		trim: true,
		unique: true,
	},
	registrationDate: {
		type: Date,
		required: false,
	},
	activities: {
		type: String,
		required: false,
		trim: true,
	},
	ward: {
		type: String,
		required: false,
		trim: true,
	},
	wardDuration: {
		type: Number,
		required: false,
		trim: true,
	},
	residence: {
		type: String,
		required: false,
		trim: true,
	},
	directionsHome: {
		type: String,
		required: false,
		trim: true,
	},
	email: {
		type: String,
		required: false,
		trim: true,
	},
	directionsHome: {
		type: String,
		required: false,
		trim: true,
	},
});

userSchema.plugin(passportLocalMongoose, {
	usernameField: "userID",
});
module.exports = mongoose.model('User', userSchema);

