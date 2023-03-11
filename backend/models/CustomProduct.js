const mongoose = require("mongoose");

const CustomSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	images: {
		type: Array,
		default: [],
	},
	price: {
		type: Number,
        required: true,
		validate(value) {
			if (value < 0) {
				throw new Error("Price cannot be negative");
			}
		},
	},
	seller_id: {
        required: true,
		type: mongoose.Schema.Types.ObjectId,
	},
});

const CustomModel = mongoose.model("Custom", CustomSchema);

module.exports = CustomModel;
