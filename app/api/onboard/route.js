// pages/api/onboard.js
import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';

export  async function POST(req, res) {
  if (req.method === 'POST') {
    const { userClerkId, name, role, location, jobSeekerDetails, employerDetails } = req.body;

    try {
      // Connect to the database
      await dbConnect();

      // Find the user by Clerk ID
      let user = await User.findOne({ userClerkId });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Update user details
      user.name = name;
      user.role = role;
      user.location = location;

      // If the user is a job-seeker, update jobSeekerDetails
      if (role === 'job-seeker') {
        user.jobSeekerDetails = jobSeekerDetails;
      }

      // If the user is an employer, update employerDetails
      if (role === 'employer') {
        user.employerDetails = employerDetails;
      }

      await user.save();

      res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
