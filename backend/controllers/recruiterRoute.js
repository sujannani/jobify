const express=require("express");
const recruiterSchema=require("../model/recruiterSchema.js");
const recruiterRoute=express.Router();
const bcrypt=require('bcrypt');

recruiterRoute.get("/",(req,res)=>{
    recruiterSchema.find((err,data)=>{
        if(err)
          return err;
        else 
          res.json(data);
    })
})

recruiterRoute.post('/signup', async (req, res) => {
    const {username,password,email,phone,company} = req.body;
    try {
      const recruiter = await recruiterSchema.findOne({$or: [{ username }, { email }],});
      if (recruiter) {
        return res.status(400).json({ message: "Exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      recruiterSchema.create({username,password: hashedPassword,email,phone,company},(err,data)=>{
        if(err){
            return err;
        }
        else{
            console.log("SignUp successful", recruiter);
            res.json({ message: 'SignUp successful' });
        }
    })
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error'});
    }
  });

  recruiterRoute.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const recruiter = await recruiterSchema.findOne({ username});
      if (!recruiter) {
        console.log('Login failed - User not found');
        return res.status(401).json({ message: 'Login failed' });
      }
      const passwordMatch = await bcrypt.compare(password, recruiter.password);
      if (passwordMatch) {
        res.json({ message: 'Login successful', recruiter });
      } else {
        res.json({ message: 'Invalid Credentials', recruiter });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error'});
    }
  });


module.exports=recruiterRoute;