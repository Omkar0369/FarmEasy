const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	product_name: {
		type: String,
		required: true,
		trim: true,
	},
	product_desc: {
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
		trim: true,
		required: true,
		validate(value) {
			if (value < 0) {
				throw new Error("Price cannot be negative");
			}
		},
	},
	category_id: {
		required: true,
		type: mongoose.Schema.Types.ObjectId,
	},
	seller_id: {
		required: true,
		type: mongoose.Schema.Types.ObjectId,
	},
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
