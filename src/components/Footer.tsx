
'use client'

import React from 'react'

function Footer() {
  return (
   <footer className='bg-black  text-gray-400 dark:text-black py-12'>

<div className='max-w-7xl mx-auto px-4 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-8 sm:px-6 lg:px-8'>
    <div>
        <h5 className='text-xl font-bold text-white'>About Us</h5>
        <p className='mt-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, perferendis dolores magni earum laudantium quidem consequuntur sed deleniti possimus, eaque, molestiae illum voluptatibus unde.</p>
    </div>


    <div>

<h5 className='text-xl font-bold text-white'>Quick Links</h5>

<ul className='mt-4 text-white'>
    <li className='text-white'><a href='#' className='hover:underline text-white'>Home</a></li>
    <li><a href='#'>About Us</a></li>
    <li><a href='#'>Courses</a></li>
    <li><a href='#'>Contact Us</a></li>
</ul>

    </div>



    <div>

<h5 className='text-xl font-bold  text-white'>Follow Us</h5>

<p className='mt-4 text-white'>Facebook Instagram Twitter</p>

    </div>



    <div>

<h5 className='text-xl font-bold text-white'>Contact Us</h5>
<p className='mt-4 text-white'>New York, USA</p>
<p className='mt-4 text-white'>+1 123-456-7890</p>
<p className='mt-4  text-white'>jKQZs@example.com</p>
<p className='mt-4  text-white'>Mon - Fri 9am - 5pm</p>
    </div>


</div>

<p className='text-center text-white text-xs pt-8'>Copyright © 2023. All rights reserved</p>

   </footer>
  )
}

export default Footer
