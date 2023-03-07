const mongoose=require('mongoose');


const ProductSchema=new mongoose.Schema({
    product_name:String,
    product_desc:String,
    images:{type:Array,default:[]},
    price:Number,
    category_id:mongoose.Schema.Types.ObjectId,
    seller_id: mongoose.Schema.Types.ObjectId,
});

const ProductModel=mongoose.model('Product',ProductSchema);

module.exports=ProductModel;