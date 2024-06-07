const mongoose = require('mongoose');
const bcrypt =require('bcryptjs');

const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    pic:{type:String,default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"}
},{
    versionKey:false,
    timestamps:true
})


const User = mongoose.model("User",userSchema);

module.exports ={
    User
}