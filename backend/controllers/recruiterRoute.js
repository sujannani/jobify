const express=require("express");
const recruiterSchema=require("../model/recruiterSchema.js");
const recruiterRoute=express.Router();
const bcrypt=require('bcrypt');
const mongoose=require("mongoose");

recruiterRoute.get("/",(req,res)=>{
    recruiterSchema.find((err,data)=>{
        if(err)
          return err;
        else 
          res.json(data);
    })
})

recruiterRoute.get("/recruiterPage/:id",(req,res)=>{
      recruiterSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
          if(err){
              return err;
          }
          else{
              res.json(data);
          }
      })
  })

  
recruiterRoute.get("/recruiterPage/hrProfile/:id",(req,res)=>{
  recruiterSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
      if(err){
          return err;
      }
      else{
          res.json(data);
      }
  })
})

recruiterRoute.get('/allRecruiterIds', async (req, res) => {
  try {
    const recruiterIds = await recruiterSchema.find({}, '_id');
    console.log(recruiterIds);
    res.status(200).json(recruiterIds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

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
            console.log("SignUp successful",data);
            res.json({ message: 'SignUp successful',recruiter:data });
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


  recruiterRoute.route("/jobs/:id")
  .get((req,res)=>{
      recruiterSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
          if(err){
              return err;
          }
          else{
              res.json(data);
          }
      })
  }).put(async (req, res) => {
    const recruiterId = req.params.id;
    const formData = req.body;
    try {
      const recruiter = await recruiterSchema.findById(recruiterId);
      if (!recruiter) {
        return res.status(404).json({ message: 'Recruiter not found' });
      }
      recruiter.applicationsPosted.push({
        title: formData.title,
        role: formData.role,
        location: formData.location,
        jobMode: formData.jobMode,
        salary: formData.salary,
        skills: formData.skills.split(','), // Assuming skills are comma-separated
        description: formData.jobDescription,
      });
      const updatedRecruiter = await recruiter.save();
      res.status(200).json({
        message: 'Update Successful',
        data: updatedRecruiter.applicationsPosted,
      });
    } catch (error) {
      console.error('Error during job posting:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  


  recruiterRoute.route("/hrprofile/:id")
  .get((req,res)=>{
      recruiterSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
          if(err){
              return err;
          }
          else{
              res.json(data);
          }
      })
  }).put((req,res)=>{
      recruiterSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
      {$set:req.body},
      (err,data)=>{
          if(err){
              return err;
          }
          else{
            res.status(200).json({ message: 'Update Successful', data });
          }
      }
      )
  })


module.exports=recruiterRoute;