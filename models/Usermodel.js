import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    userClerkId:{
        type:String,
        // require:true
    },
    name:{
        type:String,
        // require:true,
    },
    email:
    {
    type:String,
    // require:true,
    unique:true
    },
    role: {
        type: String,
        enum: ['job-seeker', 'employer', 'admin'], // Define roles
        default: 'job-seeker',
      },
      location: {
        type: String,
        default: '',
      },
      jobSeekerDetails: {
        bio: String,
        resumeUrl: String, // URL to the uploaded resume
        skills: [String],  // Array of skills
        experience: Number, // Years of experience
        education: [{
          school: String,
          degree: String,
          fieldOfStudy: String,
          startYear: Number,
          endYear: Number,
        }],
        applications: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Application', // References job applications
        }],
      },
      employerDetails: {
        companyName: String,
        companyWebsite: String,
        companyDescription: String,
        postedJobs: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Job', // References jobs posted by the employer
        }],
      },
      // For notifications and admin management
      notifications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Notification',
      }],
    }, { timestamps: true });

    const user=mongoose.models.User ||mongoose.model('User',userschema);
    export default user;