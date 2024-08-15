import { motion } from "framer-motion";
import { FaAws, FaCss3Alt, FaGit, FaHtml5, FaJava, FaJs } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiDocker, SiJenkins, SiMysql, SiPostman, SiSpring } from "react-icons/si";

const TECH_DATA = [
  { Icon: RiReactjsFill, color: 'text-cyan-400', percentage: 70, barColor: 'bg-cyan-400' },
  { Icon: FaHtml5, color: 'text-orange-600', percentage: 85, barColor: 'bg-orange-600' },
  { Icon: FaCss3Alt, color: 'text-blue-600', percentage: 79, barColor: 'bg-blue-600' },
  { Icon: FaJs, color: 'text-yellow-400', percentage: 80, barColor: 'bg-yellow-400' },
  { Icon: FaJava, color: 'text-red-600', percentage: 90, barColor: 'bg-red-600' },
  { Icon: SiSpring, color: 'text-green-600', percentage: 80, barColor: 'bg-green-600' },
  { Icon: SiPostman, color: 'text-orange-500', percentage: 91, barColor: 'bg-orange-500' },
  { Icon: SiMysql, color: 'text-blue-600', percentage: 80, barColor: 'bg-blue-600' },
  { Icon: SiDocker, color: 'text-blue-600', percentage: 85, barColor: 'bg-blue-600' },
  { Icon: FaGit, color: 'text-orange-600', percentage: 70, barColor: 'bg-orange-600' },
  { Icon: SiJenkins, color: 'text-red-500', percentage: 55, barColor: 'bg-red-500' },
  { Icon: FaAws, color: 'text-orange-500', percentage: 35, barColor: 'bg-orange-500' }
];

const Techno = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {TECH_DATA.map(({ Icon, color, percentage, barColor }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="relative group rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900"
          >
            {/* Icon with blur effect on hover */}
            <div className="relative group-hover:blur-sm transition-all duration-300">
              <Icon className={`text-7xl ${color}`} />
            </div>

            {/* Percentage Display on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-900 rounded-xl">
              <span className="text-2xl font-semibold text-white">
                {percentage}%
              </span>
            </div>

            {/* Status Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-neutral-800 rounded-b-xl">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`h-2 ${barColor} rounded-b-xl`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Techno;
