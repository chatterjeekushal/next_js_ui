
'use client'

import React from 'react'
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const musicSchools = [
    {
        title: "Harmony Music Academy",
        description: "Offering a comprehensive curriculum for all ages, Harmony Music Academy focuses on nurturing creativity through personalized instruction in various instruments and vocal techniques."
    },
    {
        title: "Rhythm & Melody Conservatory",
        description: "At Rhythm & Melody Conservatory, students explore music theory, composition, and performance. Our experienced faculty provides guidance in a supportive environment, helping musicians of all levels reach their potential."
    },
    {
        title: "The Sound Studio",
        description: "The Sound Studio specializes in modern music production and technology. Students learn the art of recording, mixing, and mastering, alongside traditional instrument lessons, preparing them for the evolving music industry."
    },
    {
        title: "Crescendo School of Music",
        description: "Crescendo School of Music emphasizes both classical and contemporary styles. With a strong focus on ensemble playing, students collaborate in orchestras and bands while developing their individual skills."
    },
    {
        title: "Virtuoso Music Institute",
        description: "Virtuoso Music Institute is dedicated to excellence in music education. Our curriculum includes masterclasses with industry professionals, performance opportunities, and specialized training in a variety of musical genres."
    }
];

function Whychooseus() {
  return (
    <div className='w-full'>

<StickyScroll content={musicSchools}/>
      
    </div>
  )
}

export default Whychooseus
