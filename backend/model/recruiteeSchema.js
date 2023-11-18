const mongoose=require("mongoose");
const recruiteeSchema=new mongoose.Schema({
    "username":{type:String},
    "password":{type:String},
    "email":{type:String},
    "phone":{type:String},
    "qualification":{type:String},
    "institutionName":{type:String},
    "fieldName":{type:String},
    "graduationYear":{type:Number},
    "workStatus":{type:String},
    "skills":{type:[String]},
    "resume":{type:Object},
    "linkedinProfile":{type:String},
    "jobsApplied":{type:[{
        "title":{type:String},
        "role":{type:String},
        "jobMode":{type:String},
        "skills":{type:[String]},
        "description":{type:String},
        "location":{type:String},
        "salary":{type:Number},
        "company":{type:String},
        "hrUsername":{type:String},
        "jobId":{type:Number}
    }]}
},{
    collection:"recruitees"
})

module.exports=mongoose.model("recruiteeSchema",recruiteeSchema);