import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 fixed bottom-0 flex flex-col items-center justify-center py-3 shadow-inner">
      {/* Navigation Links */}
      <ul className="flex flex-row gap-8 mb-1">
        <li>
          <Link href="/" className="hover:text-blue-400 transition-all duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-blue-400 transition-all duration-300">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-400 transition-all duration-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-400 transition-all duration-300">
            Contact
          </Link>
        </li>
      </ul>

      {/* Your Name */}
      <p className="text-lg text-gray-400 hover:text-blue-400 transition-all duration-300">
        © {new Date().getFullYear()} Huzaifa Sheikh
      </p>
    </footer>
  )
}

export default Footer
