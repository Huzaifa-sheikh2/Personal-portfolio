"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";

function TypingEffect() {
  return (
    <div className="flex flex-row items-center justify-between h-screen px-20 
                    bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] 
                    text-gray-200">
      
      {/* Left Side - Text */}
      <div className="flex flex-col justify-center w-1/2 space-y-4">
        <h1 className="text-4xl font-semibold">
          I work with{" "}
          <span className="text-cyan-400">
            <ReactTyped
              strings={["MERN Stack ...", "WordPress ...", "SEO ...", "Meta Ads ..."]}
              typeSpeed={150}
              backSpeed={50}
              backDelay={1500}
              loop
            />
          </span>
        </h1>

        <section id="about" className="py-10 text-gray-300 text-left">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">About Me</h2>
          <p className="max-w-xl text-lg ">
            I'm a passionate web developer skilled in building responsive, fast, and modern websites using the MERN stack and WordPress.  
            I love turning creative ideas into digital experiences that work beautifully on every device.
          </p>
        </section>
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-end h-90">
        <Image
          src="/Picture.jpg" // ✅ make sure image is inside /public
          alt="Profile picture"
          width={280}
          height={100}
          className="shadow-2xl hover:scale-110 rounded-2xl transition-transform duration-500 border-1 border-purple-500/40"
        />
      </div>

    </div>
  );
}

export default TypingEffect;
