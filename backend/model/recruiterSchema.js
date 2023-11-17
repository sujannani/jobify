const mongoose=require("mongoose");
const recruiterSchema=new mongoose.Schema({
    "username":{type:String},
    "password":{type:String},
    "email":{type:String},
    "phone":{type:String},
    "company":{type:String},
},{
    collection:"recruiters"
})

module.exports=mongoose.model("recruiterSchema",recruiterSchema);