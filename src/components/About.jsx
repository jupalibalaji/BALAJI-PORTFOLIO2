import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      {/* Slide-in from bottom for the heading */}
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className='my-20 text-center text-3xl'
      >
        About <span className='text-neutral-500'>Me</span>
      </motion.h1>

      <div className='flex flex-wrap'>
        {/* Fade-in with scale for the image */}
        <div className='w-full lg:w-1/2 lg:p-8'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className='flex items-center justify-center'
          >
            <img className='rounded-2xl' src={aboutImg} alt="About Me" />
          </motion.div>
        </div>

        {/* Slide-in from right for the text */}
        <div className='w-full lg:w-1/2'>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='flex justify-center lg:justify-start'
          >
            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
