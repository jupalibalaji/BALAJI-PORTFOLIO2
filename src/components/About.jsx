import { AnimatePresence, motion } from "framer-motion";
import aboutImg from "../assets/2.jpeg";
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <AnimatePresence>
      <div className='border-b border-neutral-900 pb-3'>
        {/* Slide-in from bottom for the heading */}
        <motion.h1
          key="heading"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }} // Optional exit animation
          transition={{ duration: 1, ease: "easeOut" }}
          className='my-4 text-center text-3xl '
        >
          About <span className='text-neutral-500'>Me</span>
        </motion.h1>

        <div className='flex flex-wrap' >
          {/* Fade-in with scale for the image */}


          {/* Slide-in from right for the text */}
          <div className='w-full p'>
              <p className='my-2 py-6 px-6 text-justify'>{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default About;
