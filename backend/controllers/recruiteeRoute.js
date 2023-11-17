const express=require("express");
const recruiteeSchema=require("../model/recruiteeSchema.js");
const recruiteeRoute=express.Router();
const bcrypt=require("bcrypt");


recruiteeRoute.post('/signup', async (req, res) => {
    const {username,password,email,mobileNumber,qualification,institutionName,fieldName,graduationYear,workStatus,skills,resume,linkedinProfile} = req.body;
    try {
      const recruitee = await recruiteeSchema.findOne({$or: [{ username }, { email }],});
      if (recruitee) {
        return res.status(400).json({ message: "Exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      recruiteeSchema.create({username,password: hashedPassword,email,mobileNumber,qualification,institutionName,fieldName,graduationYear,workStatus,skills,resume,linkedinProfile},(err,data)=>{
        if(err){
            console.log(err);
            return err;
        }
        else{
            console.log("SignUp successful");
            res.json({ message: 'SignUp successful' });
        }
    })
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error'});
    }
  });

recruiteeRoute.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const recruitee = await recruiteeSchema.findOne({ username});
      if (!recruitee) {
        console.log('Login failed - User not found');
        return res.status(401).json({ message: 'Login failed' });
      }
      const passwordMatch = await bcrypt.compare(password, recruitee.password);
      if (passwordMatch) {
        res.json({ message: 'Login successful', recruitee });
      } else {
        res.json({ message: 'Invalid Credentials', recruitee });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error'});
    }
  });

recruiteeRoute.get("/",(req,res)=>{
    recruiteeSchema.find((err,data)=>{
        if(err)
          return err;
        else
          res.json(data);
    })
})


// recruiteeRoute.route("/update-recruitee/:id")
// .get((req,res)=>{
//     recruiteeSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
//         if(err){
//             return err;
//         }
//         else{
//             res.json(data);
//         }
//     })
// }).put((req,res)=>{
//     recruiteeSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
//     {$set:req.body},
//     (err,data)=>{
//         if(err){
//             return err;
//         }
//         else{
//             res.json(data);
//         }
//     }
//     )
// })

// recruiteeRoute.delete("/delete-recruitee/:id",(req,res)=>{
//     recruiteeSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
//     (err,data)=>{
//         if(err){
//             return err;
//         }
//         else{
//             res.json(data);
//         }
//     }
//     )
// })


module.exports=recruiteeRoute;

