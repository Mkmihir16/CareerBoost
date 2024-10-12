import React from 'react'
import { PlaceholdersAndVanishInput } from '../ui/placeholders-and-vanish-input'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { HeroHighlight, Highlight } from '../ui/hero-highlight';

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
      title: "Software Developer at TechCorp",
      images: "https://plus.unsplash.com/premium_photo-1661297414288-8ed17eb1b3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "As an employer, I was impressed by how easy it was to post jobs and manage applications. Highly recommend!",
      name: "James Williams",
      title: "HR Manager at Innovate Solutions",
      images: "https://plus.unsplash.com/premium_photo-1661297414288-8ed17eb1b3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "The real-time notifications kept me updated every step of the way. A great user experience overall!",
      name: "Emily Davis",
      title: "Marketing Specialist at Creative Agency",
      images: "https://plus.unsplash.com/premium_photo-1661297414288-8ed17eb1b3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "I appreciated the platform's advanced search and filtering options. It helped me find the right candidates quickly.",
      name: "Michael Thompson",
      title: "Recruitment Lead at FinTech Inc.",
      images: "https://plus.unsplash.com/premium_photo-1661297414288-8ed17eb1b3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "The user-friendly interface and powerful features make this job portal stand out from the competition.",
      name: "Amanda Lee",
      title: "Product Designer at PixelWorks",
      images: "https://plus.unsplash.com/premium_photo-1661297414288-8ed17eb1b3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "I found several high-quality candidates in a short time. The chat system was very useful for communication.",
      name: "David Rodriguez",
      title: "CEO at Startup Solutions",
      images: "https://plus.unsplash.com/premium_photo-1661297414288-8ed17eb1b3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "The platform is fantastic for both job seekers and employers. It’s easy to navigate and provides great insights.",
      name: "Jessica Brown",
      title: "Talent Acquisition Specialist at Global Ventures",
      images: "https://plus.unsplash.com/premium_photo-1661297414288-8ed17eb1b3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "The application tracking feature helped me stay organized and made the hiring process much smoother.",
      name: "Chris Miller",
      title: "Operations Manager at Horizon Enterprises",
      images: "https://plus.unsplash.com/premium_photo-1661297414288-8ed17eb1b3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  const h1 = "Don’t settle for less. Whether you're looking to start your career or take the next step, we've got the perfect match for your skills and passions. Search from top companies hiring now, and land the job you’ve always wanted."
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
      <div >
        <HeroHighlight>
          <div className="text-center text-3xl font-extrabold font-serif">
            <p className="mb-7 px-24">
              Welcome to our Job Portal ! Find the best jobs, explore new career
              opportunities, 
            </p>
            <Highlight >
              apply to your dream position with just a few clicks.
            </Highlight>
          </div>
          <div className='flex justify-center my-10'>
          <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
            Browse Jobs</button>
          </div>
        </HeroHighlight>
      </div>
        <div className='m-10 '>
        <h1 className='text-4xl font-bold font-sans '>Testimonials</h1>
        </div>
      <div className='flex justify-center m-4'>
        <InfiniteMovingCards items={testimonials} />
      </div>
    </div>
    
  )
}

export default Hero
