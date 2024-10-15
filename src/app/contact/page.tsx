import React from 'react';
import { Meteors } from "@/components/ui/meteors";

function Page() {
  return (
    <div className='w-full min-h-screen absolute bg-black dark:bg-black flex flex-col justify-center items-center p-4'>
      <div className='text-center mb-8 pt-36'>
        <h1 className='text-4xl font-bold text-white md:text-5xl lg:text-6xl'>Contact Us</h1>
        <p className='mt-4 w-full md:w-3/4 lg:w-1/2 mx-auto text-center text-neutral-400 text-base md:text-lg'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas eius sequi laboriosam voluptatibus non iure, natus odit vero, nemo cum vitae quibusdam! Voluptates, consectetur! Assumenda tenetur molestias rerum, quo esse ciis!
        </p>
      </div>

      <div className='w-full max-w-md'>
        <form action="" className='bg-neutral-800 p-6 rounded-lg shadow-lg'>
          <div className='flex flex-col gap-4 md:gap-6'>
            <input 
              type="text" 
              className='w-full p-3 rounded-md bg-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500' 
              placeholder='Your Name' 
            />
            <input 
              type="email" 
              className='w-full p-3 rounded-md bg-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500' 
              placeholder='Your Email' 
            />
          </div>

          <div className='flex flex-col gap-4 md:gap-6 mt-4'>
            <textarea 
              className='w-full p-3 rounded-md bg-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500' 
              placeholder='Your Message' 
            />
          </div>

          <button className='w-full mt-4 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition duration-200'>
            Submit
          </button>
        </form>
      </div>

      <Meteors number={100} />
    </div>
  );
}

export default Page;
