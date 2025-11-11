import React from 'react'
import { FaCode, FaLaptopCode, FaReact, FaNodeJs } from 'react-icons/fa'

function About() {
  return (
    <div className="mt-24 px-6 md:px-20 text-gray-100  min-h-screen">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-cyan-400 text-center mb-8">
        About <span className="text-white">Me</span>
      </h1>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16">
        
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-3xl font-bold mb-3 text-cyan-400">Muhammad Huzaifa</h2>
          <p className="text-lg text-gray-300">
            I’m a passionate <span className="text-cyan-400 font-semibold">Website Developer</span> 
            with a strong focus on creating modern, responsive, and user-friendly web experiences.
            My goal is to bring ideas to life through clean design and efficient code.
          </p>
          <p className="mt-4 text-gray-400">
            I love building things that make an impact — whether it’s an eCommerce store, 
            a personal brand website, or a digital platform for businesses.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">My Core Skills</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaReact size={50} className="text-cyan-400 mb-3" />
            <p className="text-lg font-semibold">React.js</p>
          </div>

          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaNodeJs size={50} className="text-green-500 mb-3" />
            <p className="text-lg font-semibold">Node.js</p>
          </div>

          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaLaptopCode size={50} className="text-blue-400 mb-3" />
            <p className="text-lg font-semibold">Next.js</p>
          </div>

          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaCode size={50} className="text-yellow-400 mb-3" />
            <p className="text-lg font-semibold">Full Stack Development</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" text-center mt-16">
        <h2 className="text-3xl font-bold text-cyan-400 mb-10">A Little More About Me</h2>
        <p className="text-lg text-gray-300 mb-30">
          When I’m not coding, I enjoy exploring new technologies, learning about UI/UX trends, 
          and improving my problem-solving skills. I believe great design and logic go hand in hand.
        </p>
        <p className="text-lg text-gray-400 italic">
          "Building websites isn’t just my work — it’s my art and passion."
        </p>
      </div>
    </div>
  )
}

export default About
