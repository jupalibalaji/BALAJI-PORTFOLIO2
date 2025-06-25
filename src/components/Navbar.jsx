import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 py-5 lg:pl-0 lg:pr-12 flex items-center justify-between">
      {}
      <div className="BJ pl-0" >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >BJ
        </motion.h1>
      </div>

      {/* Animated Social Icons */}
      <div className='m-5 pr-12 flex justify-center gap-4 text-2xl'>
        <motion.a
          href="https://www.linkedin.com/in/balajiest/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/jupalibalaji" // Replace with your GitHub profile URL
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <FaGithub />
        </motion.a>

        <motion.a
            href="mailto:balajijupallivelama@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        >
          <FaEnvelope />
        </motion.a>

        <motion.a
            href="tel:+15134281146"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
        >
          <FaPhoneAlt />
        </motion.a>


      </div>
    </nav>
  );
};

export default Navbar;
