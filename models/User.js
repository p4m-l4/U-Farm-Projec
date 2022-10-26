const  { text } = require('express');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		trim: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
	},
	gender: {
		type: String,
		required: true,
	},
	birthDate: {
		type: Date,
		required: true,
	},
    phoneNumber: {
        type: Number,
        required: true,
        trim: true,
    },
    NIN: {
        type: String,
        required: true,
        trim: true,
    },
    userID: {
        type: String,
        required: true,
        trim: true,
    },
    registrationDate: {
        type: Date,
        required: true,
    },
    activities: {
        type: String,
        required: true,
        trim: true,
    },
    ward: {
        type: String,
        required: true,
        trim: true,
    },
    wardDuration: {
        type: Number,
        required: true,
        trim: true,
    },
    residence: {
        type: String,
        required: true,
        trim: true,
    },
    directionsHome: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
});

userSchema.plugin(passportLocalMongoose, {
	usernameField: "userID",
});
module.exports = mongoose.model('Users', userSchema);

