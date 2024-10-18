"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

export function SignupFormDemo() {
  const [role, setRole] = useState('');

  const [formdata, setFormdata] = useState({
    jobSeekerDetails: {
      bio: '',
      resumeUrl: '',
      skills: [''],
      experience: '',
      education: [{ school: '', degree: '', fieldOfStudy: '', startYear: '', endYear: '' }],
      applications: [],
    },
    employerDetails: {
      companyName: '',
      companyWebsite: '',
      companyDescription: '',
      postedJobs: [],
    },
  });

  const handleRoleChange = (event) => {
    setRole(event.target.value); // Correctly updating the role
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with role:", role);
    console.log("Form data:", formdata);
  };

  const handleInputChange = (e, field, isEmployer = false) => {
    const { name, value } = e.target;
    if (isEmployer) {
      setFormdata((prevData) => ({
        ...prevData,
        employerDetails: {
          ...prevData.employerDetails,
          [name]: value,
        },
      }));
    } else {
      setFormdata((prevData) => ({
        ...prevData,
        jobSeekerDetails: {
          ...prevData.jobSeekerDetails,
          [field]: value,
        },
      }));
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to CareerBoost
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Unlock your dream job opportunities! Complete your profile to get personalized job recommendations and let top employers find you faster!
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <div
          className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Country</Label>
            <Input id="firstname" placeholder="India" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">State</Label>
            <Input id="lastname" placeholder="Maharashtra" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
            <Label htmlFor="lastname">City</Label>
            <Input id="lastname" placeholder="Nagpur" type="text" />
          </LabelInputContainer>
        {/* Role selection */}
        <div className="mb-3">
          <Label htmlFor="role">Select Role</Label>
          <select
            id="role"
            value={role} // Set the value to reflect the current state
            onChange={handleRoleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="">Select your role</option>
            <option value="job_seeker">Job Seeker</option>
            <option value="employer">Employer</option>
          </select>
        </div>

        {/* Conditional fields for Job Seeker */}
        {role === 'job_seeker' && (
          <>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="bio">Bio</Label>
              <Input
                id="bio"
                name="bio"
                placeholder="A brief bio"
                type="text"
                value={formdata.jobSeekerDetails.bio}
                onChange={(e) => handleInputChange(e, 'bio')}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="resumeUrl">Resume URL</Label>
              <Input
                id="resumeUrl"
                name="resumeUrl"
                placeholder="Link to your resume"
                type="text"
                value={formdata.jobSeekerDetails.resumeUrl}
                onChange={(e) => handleInputChange(e, 'resumeUrl')}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="experience">Experience (in years)</Label>
              <Input
                id="experience"
                name="experience"
                placeholder="Years of experience"
                type="number"
                value={formdata.jobSeekerDetails.experience}
                onChange={(e) => handleInputChange(e, 'experience')}
              />
            </LabelInputContainer>
          </>
        )}

        {/* Conditional fields for Employer */}
        {role === 'employer' && (
          <>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                name="companyName"
                placeholder="Company name"
                type="text"
                value={formdata.employerDetails.companyName}
                onChange={(e) => handleInputChange(e, 'companyName', true)}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="companyWebsite">Company Website</Label>
              <Input
                id="companyWebsite"
                name="companyWebsite"
                placeholder="https://"
                type="text"
                value={formdata.employerDetails.companyWebsite}
                onChange={(e) => handleInputChange(e, 'companyWebsite', true)}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="companyDescription">Company Description</Label>
              <Input
                id="companyDescription"
                name="companyDescription"
                placeholder="Short description of the company"
                type="text"
                value={formdata.employerDetails.companyDescription}
                onChange={(e) => handleInputChange(e, 'companyDescription', true)}
              />
            </LabelInputContainer>
          </>
        )}

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
