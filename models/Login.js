const mongoose=require('mongoose');

const LoginSchema=new mongoose.Schema({
    username:String,
    email:{type:String,unique:true},
    password:String,
    role:String
});

const LoginModel=mongoose.model('Login',LoginSchema);

module.exports=LoginModel;