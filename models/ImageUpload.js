const mongoose = require("mongoose");

const ImageUploadSchema = new mongoose.Schema({
	image: {
		type: String,
		required: true,
		trim: true,
	},

	seller_id: {
        required: true,
		type: mongoose.Schema.Types.ObjectId,
	},
});

const ImageUploadModel = mongoose.model("Custom", ImageUploadSchema);

module.exports = ImageUploadModel;
