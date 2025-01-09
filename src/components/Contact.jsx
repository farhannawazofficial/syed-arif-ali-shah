import React from "react";
import { FaFacebookSquare, FaTiktok, FaYoutube, FaInstagramSquare, FaLinkedin, } from "react-icons/fa";

function Contact(){
  return (
      <div className="text-center flex flex-col gap-5 max-[426px]:mt-44 h-auto my-20" id="contact">
        <div className="text-5xl mb-10 max-[500px]:text-3xl max-[500px]:mb-5">Contact Me ☎️</div>
        <p className="text-gray-400 text-base">
          DISCUSS A SEMINAR OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </p>
        <a href="tel:+923349009827" className="text-gray-400 text-2xl hover:text-white">+92-3132210592</a>
        <a href="mailto:syedtalhadev7@gmail.com" className="text-gray-400 text-2xl hover:text-white">syedarifalishah44@gmail.com</a>
        <div className="flex justify-center gap-5 mt-10">
          <a href="https://www.facebook.com/syedarifalishahofficial/" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaFacebookSquare />
          </a>
          <a href="https://www.linkedin.com/in/syedarifalishah/" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/syedarifalishah44official/" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
          <FaInstagramSquare />
          </a>
          <a href="https://www.tiktok.com/@sarifalishah44official" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
          <FaTiktok  />
          </a>
          <a href="https://www.youtube.com/@SyedArifAliShah44" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
          <FaYoutube  />
          </a>
        </div>
      </div>
  )
}

export default Contact;