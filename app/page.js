"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";

function TypingEffect() {
  return (
    <div className="pb-20"> {/* ✅ Add bottom padding to prevent footer overlap */}
      <div
        className="flex flex-col-reverse md:flex-row items-center justify-between 
                   min-h-screen px-6 md:px-20 py-10 
                   bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] 
                   text-gray-200"
      >
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center w-full md:w-1/2 space-y-4 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-cyan-400 text-5xl font-serif">Muhammad Huzaifa</h1>
          <section id="about" className="py-6 text-gray-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-4">
              About Me
            </h2>
            <p className="max-w-xl mx-auto md:mx-0 text-base sm:text-lg leading-relaxed font-serif">
              I'm a passionate web developer skilled in building responsive, fast,
              and modern websites using the MERN stack and WordPress.  
              I love turning creative ideas into digital experiences that work beautifully
              on every device.
            </p>
          </section>
          <h1 className="text-3xl sm:text-4xl font-semibold font-serif">
            I work with{" "}
            <span className="text-cyan-400 font-serif">
              <ReactTyped
                strings={[
                  "MERN Stack ...",
                  "WordPress ...",
                  "SEO ...",
                  "Meta Ads ...",
                ]}
                typeSpeed={150}
                backSpeed={50}
                backDelay={1500}
                loop
              />
            </span>
          </h1>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2 h-90 sm: my-10">
          <Image
            src="/Image.png" // ✅ make sure image is inside /public
            alt="Profile picture"
            width={300}
            height={300}
            className="shadow-2xl hover:scale-105 rounded-2xl transition-transform duration-500 border-2 border-purple-500/40"
          />
        </div>
      </div>
    </div>
  );
}

export default TypingEffect;
