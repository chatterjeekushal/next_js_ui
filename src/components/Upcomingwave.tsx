
'use client'

import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "@/components/ui/card-hover-effect";


export const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];
  
  

export default function Upcomingwave() {
  return (
    <div className='p-12 bg-gray-900'>

        <div className='max-w-7xl max-auto px-4 sm:px-6 lg:px-8'>

<div className='text-center '>
    <h2 className='test-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
    <p className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>Enhance your musical jurney</p>
</div>


<div className='m-10 text-center'>

<HoverEffect items={projects.map((item) => ({ title: item.title, description: item.description, link: item.link }))} />

</div>



<div className='mt-10 text-center'>
    <Link href={'/webinars'} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition deration-200 '>View All Webinars</Link>
</div>

        </div>
      
    </div>
  )
}
