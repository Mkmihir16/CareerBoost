import React from 'react'
import { PlaceholdersAndVanishInput } from '../ui/placeholders-and-vanish-input'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

const Hero = () => {
    const placeholders = [
        "Search jobs by title",
        "Enter location or city",
        "Type keywords or skills",
      ];
      const testimonials = [
        {
          quote: "This platform made my job search seamless and effective. I found my dream job within a week of signing up!",
          name: "Sarah Johnson",
          title: "Software Developer at TechCorp"
        },
        {
          quote: "As an employer, I was impressed by how easy it was to post jobs and manage applications. Highly recommend!",
          name: "James Williams",
          title: "HR Manager at Innovate Solutions"
        },
        {
          quote: "The real-time notifications kept me updated every step of the way. A great user experience overall!",
          name: "Emily Davis",
          title: "Marketing Specialist at Creative Agency"
        },
        {
          quote: "I appreciated the platform's advanced search and filtering options. It helped me find the right candidates quickly.",
          name: "Michael Thompson",
          title: "Recruitment Lead at FinTech Inc."
        },
        {
          quote: "The user-friendly interface and powerful features make this job portal stand out from the competition.",
          name: "Amanda Lee",
          title: "Product Designer at PixelWorks"
        },
        {
          quote: "I found several high-quality candidates in a short time. The chat system was very useful for communication.",
          name: "David Rodriguez",
          title: "CEO at Startup Solutions"
        },
        {
          quote: "The platform is fantastic for both job seekers and employers. It’s easy to navigate and provides great insights.",
          name: "Jessica Brown",
          title: "Talent Acquisition Specialist at Global Ventures"
        },
        {
          quote: "The application tracking feature helped me stay organized and made the hiring process much smoother.",
          name: "Chris Miller",
          title: "Operations Manager at Horizon Enterprises"
        }
      ];
      
  return (
    <div>
        <div>
            <h1 className='leading-relaxed text-4xl font-extrabold text-center mt-3'>Find Your Dream Job Now</h1>
            <p className='text-xl text-center italic'>Discover thousands of job opportunities, connect with top talent, and make the next move in your career </p>
        </div>
        <div className='m-5'>
      <PlaceholdersAndVanishInput
       placeholders={placeholders}
       />
        </div>
        <div className='flex justify-center m-4'>
        <InfiniteMovingCards items={testimonials}/>
        </div>
    </div>
  )
}

export default Hero
