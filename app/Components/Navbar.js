"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // modern icons (built-in to shadcn/lucide-react)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg px-6 md:px-10 py-4 flex justify-between items-center z-50 backdrop-blur-md">
      {/* Logo */}
      <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-wide hover:text-blue-400 transition-all duration-300">
        Huzaifa<span className="text-blue-500">.</span>
      </h2>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-10">
        <li><Link href="/" className="text-gray-300 hover:text-blue-400 transition-all duration-300">Home</Link></li>
        <li><Link href="/projects" className="text-gray-300 hover:text-blue-400 transition-all duration-300">Projects</Link></li>
        <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-all duration-300">About</Link></li>
        <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-all duration-300">Contact</Link></li>
      </ul>

      {/* CV Button (Desktop only) */}
      <a
        href="/Personal-portfolio/my-portfolio/public/Minimalist Professional CV Resume (3).pdf" // place file in /public/HuzaifaCV.pdf
        download
        className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-5 py-2 shadow-md transition-all duration-300 hover:shadow-blue-500/30"
      >
        Download CV
      </a>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center py-6 space-y-4 md:hidden shadow-md">
          <Link href="/" className="text-gray-300 hover:text-blue-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/projects" className="text-gray-300 hover:text-blue-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-all duration-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Contact</Link>
          <a
            href="/Personal-portfolio/my-portfolio/public/Minimalist Professional CV Resume (3).pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-5 py-2 shadow-md transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
