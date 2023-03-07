const mongoose=require('mongoose');

const ImageUploadSchema=new mongoose.Schema({
    
    image:String,
    
    seller_id:mongoose.Schema.Types.ObjectId,
    
});

const ImageUploadModel=mongoose.model('Custom',ImageUploadSchema);

module.exports=ImageUploadModel;