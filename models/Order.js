const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
	address: {
		type: String,
		required: true,
		trim: true,
	},
	city: {
		type: String,
		required: true,
		trim: true,
	},
	state: {
		type: String,
		required: true,
		trim: true,
	},
	zip_code: {
		type: String,
		required: true,
		trim: true,
	},
	contact: {
		type: Number,
		trim: true,
		required: true,
		validate(value) {
			if (len(value) < 0 || len(value) > 10) {
				throw new Error("Invalid Number");
			}
		},
	},
	images: {
		type: Array,
		default: [],
	},
	price: {
		type: Number,
		trim: true,
		required: true,
		validate(value) {
			if (value < 0) {
				throw new Error("Price cannot be negative");
			}
		},
	},
	customer_id: {
		required: true,
		type: mongoose.Schema.Types.ObjectId,
	},
});

const OrderModel = mongoose.model("Custom", OrderSchema);

module.exports = OrderModel;
