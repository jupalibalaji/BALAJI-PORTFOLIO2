import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="BJ">
      <h1>BJ</h1>
      </div>
        <div className='m-8 flex justify-center gap-4 text-2xl'>
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
        </div>

      </nav>
  )
}

export default Navbar