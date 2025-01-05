import Image from 'next/image'
import next from 'next'
import React from 'react'
import Link from 'next/link'
import {FaYoutubeSquare } from "react-icons/fa"

const Footer = () => {
    return (
         <div className='bg-blue-200'>
            <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       <Image  src={require("../../../public/assests/profile/flower.jpg") }
             alt=
            "It mate pakistan"
             width={100}
              height={100}
            className="w [50px]"
            />
      
       
       
      <span className="ml-3 text-xl">Its My Portfolio</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Portfolio 
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
      target='blank'
      href={"https://www.youtube.com/results?search_query=books+to+read"}className="text-gray-500">
      <FaYoutubeSquare />
      
      </Link>
    </span>
  </div>
</footer>
 </div>
    )
}

export default Footer