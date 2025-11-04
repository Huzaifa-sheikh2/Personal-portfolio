import React from 'react'
import { FaGithub, FaLinkedin,FaFacebook,FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
function Links() {
    let links = {
    github: "https://github.com/Huzaifa-sheikh2",
    linkedin: "https://www.linkedin.com/in/huzaifa-sheikh-590a81344/",
    facebook: "",
    instagram: "https://www.instagram.com/huzaifa_sheikh_/"
    }

    const icons = {
    github: <FaGithub size={30} />,
    linkedin: <FaLinkedin size={30} />,
    facebook: <FaFacebook size={30} />,
    instagram: <FaInstagram size={30} />,
    }
  return (
    <div>
        <div className='flex space-x-4 '>
       {Object.entries(links).map(([name, url]) => (
        <Link 
        className='bg-gray-200 dark:bg-gray-800 rounded-full hover:scale-110'
          key={name} 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {icons[name]}
        </Link>
      ))}
        </div>
    </div>
  )
}

export default Links
