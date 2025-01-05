
import Image from "next/image"
import React from "react"


const About =() => {
    return (
        <div id ="about">
          <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[300x]"
              alt="hero"
              src={require("../../../public/assests/profile/pic3.jpg")}
              width={200}
              height={200}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-4 leading-relaxed">
             
            "I have completed my Matriculation in Science,
             Intermediate from an Arts College, 
             a Bachelor's degree from a private university in Karachi, 
             and a Master's degree in Economics from the University of Karachi."
            </p>
            <div className="flex justify-center">
                <a href={"yahan cv ka link aega"}>
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                View CV
                
              </button>
              </a>
              
            </div>
          </div>
        </div>
      </section>
      </div>
    )
}

export default About

