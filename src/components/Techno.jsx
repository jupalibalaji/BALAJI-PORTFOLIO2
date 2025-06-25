import { motion } from "framer-motion";
import {
    FaAws, FaCss3Alt, FaGit, FaHtml5, FaJava, FaJs
} from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import {
    SiApachekafka, SiDocker, SiJenkins, SiMysql, SiPostman, SiSpring, SiKubernetes, SiMongodb, SiSelenium, SiGooglecloud, SiJirasoftware, SiRabbitmq, SiTensorflow
} from "react-icons/si";

const TECH_DATA = [
    // 🟩 Backend
    { Icon: FaJava, color: 'text-red-600', percentage: 90, barColor: 'bg-red-600', iconName: 'Java' },
    { Icon: SiSpring, color: 'text-green-600', percentage: 80, barColor: 'bg-green-600', iconName: 'Spring' },
    { Icon: SiMysql, color: 'text-blue-600', percentage: 80, barColor: 'bg-blue-600', iconName: 'MySQL' },
    { Icon: SiMongodb, color: 'text-green-500', percentage: 75, barColor: 'bg-green-500', iconName: 'MongoDB' },
    { Icon: SiApachekafka, color: 'text-purple-600', percentage: 85, barColor: 'bg-purple-600', iconName: 'Kafka' },
    { Icon: SiRabbitmq, color: 'text-orange-500', percentage: 55, barColor: 'bg-orange-500', iconName: 'RabbitMQ' },

    // 🔷 Frontend
    { Icon: RiReactjsFill, color: 'text-cyan-400', percentage: 70, barColor: 'bg-cyan-400', iconName: 'ReactJS' },
    { Icon: FaHtml5, color: 'text-orange-600', percentage: 85, barColor: 'bg-orange-600', iconName: 'HTML5' },
    { Icon: FaCss3Alt, color: 'text-blue-600', percentage: 90, barColor: 'bg-blue-600', iconName: 'CSS3' },
    { Icon: FaJs, color: 'text-yellow-400', percentage: 80, barColor: 'bg-yellow-400', iconName: 'JavaScript' },

    // ⚙️ DevOps & CI/CD
    { Icon: SiDocker, color: 'text-blue-600', percentage: 85, barColor: 'bg-blue-600', iconName: 'Docker' },
    { Icon: SiKubernetes, color: 'text-blue-500', percentage: 60, barColor: 'bg-blue-500', iconName: 'Kubernetes' },
    { Icon: SiJenkins, color: 'text-red-500', percentage: 75, barColor: 'bg-red-500', iconName: 'Jenkins' },
    { Icon: FaGit, color: 'text-orange-600', percentage: 70, barColor: 'bg-orange-600', iconName: 'Git' },

    // ☁️ Cloud
    { Icon: FaAws, color: 'text-orange-500', percentage: 50, barColor: 'bg-orange-500', iconName: 'AWS' },
    { Icon: SiGooglecloud, color: 'text-yellow-500', percentage: 65, barColor: 'bg-yellow-500', iconName: 'GCP' },

    // 🧰 Tools & QA
    { Icon: SiPostman, color: 'text-orange-500', percentage: 91, barColor: 'bg-orange-500', iconName: 'Postman' },
    { Icon: SiSelenium, color: 'text-green-400', percentage: 70, barColor: 'bg-green-400', iconName: 'Selenium' },
    { Icon: SiJirasoftware, color: 'text-blue-400', percentage: 80, barColor: 'bg-blue-400', iconName: 'JIRA' },

    // 🤖 AI/ML
    { Icon: SiTensorflow, color: 'text-yellow-400', percentage: 50, barColor: 'bg-yellow-400', iconName: 'AI/ML' }
];


const Techno = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h1>

            {/* Grid Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8 place-items-center">
                {TECH_DATA.map(({ Icon, color, percentage, barColor, iconName }, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                        className="group relative rounded-2xl border-4 border-neutral-800 p-6 bg-neutral-900 w-full flex flex-col items-center"
                    >
                        {/* Icon */}
                        <div className={`text-3xl ${color}`}>
                            <Icon />
                        </div>

                        {/* Technology Name */}
                        <span className="mt-3 text-white text-sm font-medium">
              {iconName}
            </span>

                        {/* Percentage on Hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-900 bg-opacity-80 rounded-xl">
              <span className="text-2xl font-semibold text-white">
                {percentage}%
              </span>
                        </div>

                        {/* Status Bar */}
                        <div className="absolute bottom-0 left-0 right-0 bg-neutral-800 rounded-b-xl overflow-hidden">
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

