import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import profilePic from "../assets/1.jpeg";
import { HERO_CONTENT } from "../constants";


const BJ = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:ml-8">
            {/* Slide-in from left for the name */}
            <motion.h1
              animate={{ x: 0 }}
              initial={{ x: -200 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl lg:text-left lg:self-start"
            >
              BALAJI JUPALLI
            </motion.h1>

            {/* Fade-in with color animation for the title */}
            <motion.span
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ ease: "easeIn", duration: 2 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent lg:text-left lg:self-start"
            >
              Full Stack Developer
            </motion.span>

            {/* Slide-in from right for the description */}
            <motion.p
              animate={{ x: 0 }}
              initial={{ x: 200 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
              className="my-2 max-w-xl py-6 font-light text-base tracking-tighter lg:text-left lg:self-start"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Resume Button */}
            <a 
              href="../assets/projects/Balaji_Java.pdf" // Replace with your resume file path
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-lg rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-700 transition duration-300 ease-in-out"
            >
              <FontAwesomeIcon icon={faFileAlt} className="mr-3" />
              RESUME
            </a>
          </div>
        </div>

        {/* Fade-in with scale effect for the profile picture */}
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center items-start">
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className="flex justify-center"
          >
            <img 
              src={profilePic} 
              alt="Profile" 
              className="shadow-lg"
              style={{ 
                width: '400px', // Reduced width
                height: 'auto', // Maintain aspect ratio
                maxWidth: '100%', 
                borderRadius: '30px', // Reduced border radius
                objectFit: 'cover', // Ensures the image covers the area without distortion
                marginTop: '0px' // Move the image up
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BJ;
