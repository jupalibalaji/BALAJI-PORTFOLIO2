import { motion } from "framer-motion";
import profilePic from "../assets/1.jpeg";
import { HERO_CONTENT } from "../constants";

const BJ = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Slide-in from left for the name */}
            <motion.h1
              animate={{ x: 0 }}
              initial={{ x: -200 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl" // Slightly reduced font size
            >
              BALAJI JUPALLI
            </motion.h1>

            {/* Fade-in with color animation for the title */}
            <motion.span
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ ease: "easeIn", duration: 2 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent" // Slightly reduced font size
            >
              Full Stack Developer
            </motion.span>

            {/* Slide-in from right for the description */}
            <motion.p
              animate={{ x: 0 }}
              initial={{ x: 200 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
              className="my-2 max-w-xl py-6 font-light text-base tracking-tighter" // Slightly reduced font size
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Fade-in with scale effect for the profile picture */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className="flex justify-center"
          >
            <img src={profilePic} alt="Profile" className="rounded-full shadow-lg"/>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default BJ;
