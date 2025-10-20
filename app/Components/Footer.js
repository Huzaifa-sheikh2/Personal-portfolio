"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-gray-900 text-gray-300 fixed bottom-0 flex flex-col items-center justify-center py-4 shadow-inner z-40"
    >
      {/* Navigation Links */}
      <ul className="flex flex-row gap-8 mb-2">
        {links.map((link, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              href={link.href}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              {link.name}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Footer Name */}
      <motion.p
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="text-sm md:text-base text-gray-400 hover:text-blue-400 transition-colors duration-300"
      >
        © {new Date().getFullYear()} Huzaifa Sheikh
      </motion.p>
    </motion.footer>
  );
}
