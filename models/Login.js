const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error("Invalid Email");
			}
		},
	},
	password: {
		type: String,
		required: true,
		trim: true,
		minlength: 7,
		validate(value) {
			if (value.includes("password")) {
				throw new Error("Give a strong Password");
			}
		},
	},
	role: {
		type: String,
		required: true,
		trim: true,
	},
});

const LoginModel = mongoose.model("Login", LoginSchema);

module.exports = LoginModel;
