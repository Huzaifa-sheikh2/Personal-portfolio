"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60 }}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg px-6 md:px-10 py-4 flex justify-between items-center z-50 backdrop-blur-md"
    >
      {/* Logo */}
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl md:text-2xl font-extrabold text-white tracking-wide hover:text-blue-400 transition-all duration-300 cursor-pointer"
      >
        Personal-Portfolio<span className="text-blue-500">.</span>
      </motion.h2>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-10">
        {navLinks.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Link
              href={link.path}
              className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 group"
            >
              {link.name}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* CV Button (Desktop only) */}
      <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4 }}
>
  <Link
    href="/HuzaifaCV.pdf"
    download
    onClick={(e) => {
      e.preventDefault(); // stop automatic download
      Swal.fire({
        className:"font-sans",
        title: "Download CV?",
        text: "Do you want to download Huzaifa's CV?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#4BB543",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, download it!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Continue with download
          const link = document.createElement("a");
          link.href = "/HuzaifaCV.pdf";
          link.download = "HuzaifaCV.pdf";
          link.click();

          Swal.fire("Downloaded!", "Your CV has been downloaded.", "success");
        }
      });
    }}
    className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-5 py-2 shadow-md transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105"
  >
    Download CV
  </Link>
</motion.div>


      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center py-6 space-y-4 md:hidden shadow-md"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={link.path}
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

           <Link
  href="/HuzaifaCV.pdf"
  download
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-5 py-2 shadow-md transition-all duration-300 hover:scale-105"
  onClick={(e) => {
    e.preventDefault(); // stop automatic download

    Swal.fire({
      className:"font-sans",
      title: "Download CV?",
      text: "Do you want to download Huzaifa's CV?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4BB543",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, download it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // close any modal or drawer if needed
        if (typeof setIsOpen === "function") setIsOpen(false);

        // create a temporary link to start the download
        const link = document.createElement("a");
        link.href = "/HuzaifaCV.pdf";
        link.download = "HuzaifaCV.pdf";
        link.click();

        // show success alert
        Swal.fire("Downloaded!", "Your CV has been downloaded.", "success");
      }
    });
  }}
>
  Download CV
</Link>

          </motion.div>
        )}
      </AnimatePresence>
      
    </motion.nav>
    
  );
}
