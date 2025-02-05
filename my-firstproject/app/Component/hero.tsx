"use client"


"use client";
import Image from "next/image"
import Link from "next/link";
import React from "react"
import Typewriter from 'typewriter-effect';



const Hero =() =>{
    return(
        <section className="text-gray-600 body-font  bg-gray-100 bg-fixed">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am
              <br className="hidden lg:inline-block" />
            
            
<Typewriter
  options={{
    strings: ['Future Web Developer', 'Teacher' 

    ],
    autoStart: true,
    loop: true,
  }}
/>
            </h1>
            
            <p className="mb-8 leading-relaxed">
             I am a teacher of Nurcery Class and i have some of Qualities like
            Patience. ...
             Conflict Resolution. ...
              Time Management. ...
              Technology and Computer Literacy. ...
               Attention to Detail. ...
               Problem-Solving. ...
                Leadership. ...
                Communication
            </p>
            <div className="flex justify-center">
              <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contect
              </button>
              </Link>
              
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image 
              className="object-cover object-center rounded mx-auto w-[50-rem] " 
              alt="hero"
              width={200}
              height={200}
              src={require("../../../public/assests/profile/pic3.jpg")}
            />
          </div>
        </div>
      </section>
      
    )
}

export default Hero