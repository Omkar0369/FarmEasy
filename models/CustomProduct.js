const mongoose=require('mongoose');

const CustomSchema=new mongoose.Schema({
    title:String,
    images:{type:Array,default:[]},
    price:Number,
    seller_id: mongoose.Schema.Types.ObjectId,
});

const CustomModel=mongoose.model('Custom',CustomSchema);

module.exports=CustomModel;