const express=require('express');
var cors=require('cors');
const bcrypt=require('bcryptjs');
const mongoose=require('mongoose');
const app=express();
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



app.get('/',(req,res)=>{
    console.log("test okk");
    res.json('test is ok')
})

app.listen(4000,(req,res)=>{
    console.log('running succesfully at port 4000');
})