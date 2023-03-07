const mongoose=require('mongoose');

const OrderSchema=new mongoose.Schema({
    address:String,
    city:String,
    state:String,
    zip_code:String,
    contact:Number,
    images:{type:Array,default:[]},
    price:Number,
    customer_id:mongoose.Schema.Types.ObjectId,
    
});

const OrderModel=mongoose.model('Custom',OrderSchema);

module.exports=OrderModel;