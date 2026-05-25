import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
} from "react-icons/fa";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const achievements = [
    {
      icon: FaAward,
      text: "Engineered the Video Calculation Screen for AEROBO Cloud, integrating Go backend APIs and request payload mapping, reducing failed job submissions by 25%",
    },
    {
      icon: FaAward,
      text: "Redesigned global navigation across 8 supported languages and 2 user flows (photo and video), decreasing page load times by 18% through code optimization and improved caching",
    },
    {
      icon: FaAward,
      text: "Increased test coverage by adding 19 unit and integration test cases (Jest, React Testing Library), ensuring 677 passing tests",
    },
    {
      icon: FaAward,
      text: "Improved stability of video upload and validation components through comprehensive testing",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="relative bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-navy-700/50"
          >
            {/* Top Section - Logo and Basic Details Side by Side */}
            <div className="grid md:grid-cols-[300px_1fr] gap-0">
              {/* Left Side - Company Logo Section */}
              <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-8 flex flex-col items-center justify-center min-h-[300px]">
                {/* Geometric pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1),transparent_50%)]"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.05)_48%,rgba(255,255,255,0.05)_52%,transparent_52%)] bg-[length:20px_20px]"></div>
                </div>

                {/* Logo Container */}
                <div className="relative z-10 bg-white rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/Aerosense.jpg"
                    alt="Aerosense Inc"
                    className="h-25 w-auto object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<div class="text-3xl font-bold text-gray-900" style="font-family: serif;">Aerosense<br/>Inc</div>';
                    }}
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 right-4 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
              </div>

              {/* Right Side - Basic Details */}
              <div className="p-8 md:p-10">
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
                    Software Engineer Intern
                  </h3>
                  <p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    Aerosense Inc. (AEROBO Cloud)
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="w-4 h-4 text-cyan-500" />
                      <span className="font-medium">December 2025 - March 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="w-4 h-4 text-cyan-500" />
                      <span className="font-medium">Tokyo, Japan (Remote)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaBriefcase className="w-4 h-4 text-cyan-500" />
                      <span className="font-medium">Full-time Internship</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    Spearheading the development of the "Video Calculation Screen" for the AEROBO Cloud drone platform, integrating Go backend APIs and enabling advanced video data integration. Redesigned global navigation across 8 supported languages and modernized the frontend Internationalization (i18n) architecture for improved accessibility and performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section - Key Achievements (Full Width) */}
            <div className="p-8 md:p-10 pt-0">
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="gradient-text">Key Achievements</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-cyan-500 to-transparent"></div>
                </h4>

                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl hover:shadow-md transition-all duration-300"
                    >
                      <achievement.icon className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {achievement.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4 text-gray-700 dark:text-gray-300">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "Go",
                    "TypeScript",
                    "React",
                    "HTML",
                    "CSS",
                    "API Blueprint",
                    "Jest",
                    "React Testing Library",
                    "Internationalization (i18n)",
                    "Video Data Processing",
                    "Frontend Architecture"
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 dark:text-blue-300 rounded-full border border-blue-500/30 hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlight Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                    25%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Failed Jobs Reduced
                  </div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    18%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Page Load Time Improved
                  </div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    677
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Passing Tests
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-pink-500/10 rounded-full filter blur-3xl -z-10"></div>
          </motion.div>

          {/* Certificate Badge */}
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <a
              href="https://drive.google.com/file/d/1me60Vjqqq4BmnjanLcJrKSfQYjAcRdGm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <FaAward className="w-5 h-5" />
              View Certificate
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
