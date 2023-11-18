const mongoose=require("mongoose");
const recruiterSchema=new mongoose.Schema({
    "username":{type:String},
    "password":{type:String},
    "email":{type:String},
    "phone":{type:String},
    "company":{type:String},
    "applicationsPosted":{type:[{
        "title":{type:String},
        "role":{type:String},
        "location":{type:String},
        "jobMode":{type:String},
        "salary":{type:Number},
        "skills":{type:[String]},
        "jobDescription":{type:String},
        "hrUsername":{type:String}
    }]},
    "applicationsReceived":{type:[{
        "userId":{type:String},
        "applicationId":{type:String}
    }]}
},{
    collection:"recruiters"
})

module.exports=mongoose.model("recruiterSchema",recruiterSchema);