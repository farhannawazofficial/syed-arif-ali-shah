import React from "react";
import myimg from "../assets/images/myimg.jpg"

function About() {
  return (
    <div className="mx-auto h-auto my-36 max-xl:my-20" id="about">
      <div className="flex gap-6 justify-between items-center max-md:flex-wrap max-xl:justify-center">
        <div className="w-1/2 max-xl:w-full text-left max-md:text-center">
          <h1 className="text-4xl max-md:text-4xl mb-5">Hi, I'm Syed Arif Ali Shah 👋</h1>
          <p className="text-2xl max-md:text-base mb-5 font-light">
          A Motivational Speaker and Personal Coach dedicated to inspiring growth, building confidence, and unlocking potential. Let’s transform challenges into opportunities and create a path to success together!
          </p>
          <a href="#contact" className="p-2 px-4 rounded-md text-base bg-white text-purple-500 hover:bg-purple-500 hover:text-white transition-all inline-block w-auto">GET IN TOUCH</a>
        </div>
        <img
          className="h-80 max-xl:h-64 rounded max-[426px]:h-auto max-[426px]:w-full max-[426px]:mb-5"
          src={myimg}
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
