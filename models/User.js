const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
	name: {
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

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
