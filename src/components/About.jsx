import { AnimatePresence, motion } from "framer-motion";
import aboutImg from "../assets/2.jpeg";
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <AnimatePresence>
      <div className='border-b border-neutral-900 pb-4'>
        {/* Slide-in from bottom for the heading */}
        <motion.h1
          key="heading"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }} // Optional exit animation
          transition={{ duration: 1, ease: "easeOut" }}
          className='my-20 text-center text-3xl'
        >
          About <span className='text-neutral-500'>Me</span>
        </motion.h1>

        <div className='flex flex-wrap'>
          {/* Fade-in with scale for the image */}
          <div className='w-full lg:w-1/2 lg:p-8 flex items-center justify-center'>
            <motion.div
              key="image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }} // Optional exit animation
              transition={{ duration: 1.5, ease: "easeOut" }}
              className='flex items-center justify-center'
            >
              <img
                className='rounded-2xl'
                src={aboutImg}
                alt="About Me"
                style={{ width: '500px', height: 'auto', maxWidth: '100%' }} // Increased width for a larger image
              />
            </motion.div>
          </div>

          {/* Slide-in from right for the text */}
          <div className='w-full lg:w-1/2'>
            <motion.div
              key="text"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }} // Optional exit animation
              transition={{ duration: 1, ease: "easeOut" }}
              className='flex justify-center lg:justify-start'
            >
              <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default About;
