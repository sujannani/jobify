const mongoose=require("mongoose");
const recruiteeSchema=new mongoose.Schema({
    "username":{type:String},
    "password":{type:String},
    "email":{type:String},
    "mobileNumber":{type:String},
    "qualification":{type:String},
    "institutionName":{type:String},
    "fieldName":{type:String},
    "graduationYear":{type:Number},
    "workStatus":{type:String},
    "skills":{type:[String]},
    "resume":{type:Object},
    "linkedinProfile":{type:String},
},{
    collection:"recruitees"
})

module.exports=mongoose.model("recruiteeSchema",recruiteeSchema);