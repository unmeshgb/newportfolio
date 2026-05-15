import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaTrophy, FaCode, FaShieldAlt, FaMedal } from "react-icons/fa";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const achievements = [
    {
      icon: FaShieldAlt,
      title: "Aerosense Inc. Internship",
      description:
        "Secured a competitive Software Engineering Internship at Aerosense Inc. (AEROBO Cloud), focusing on Video Calculation Screen development, global navigation redesign, and test coverage improvements.",
      date: "2026",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: FaTrophy,
      title: "Agglomeration 2.0 Hackathon Winner",
      description:
        "Secured 1st place in the Water Management System (AquaGuard) problem statement at Agglomeration 2.0 Hackathon by delivering an innovative solution through data-driven insights and efficient resource monitoring.",
      date: "2026",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: FaMedal,
      title: "Meta Hacker Cup 2025",
      description:
        "Placed 1148th globally in Meta Hacker Cup 2025, competing against elite algorithmic programmers worldwide.",
      date: "2025",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: FaCode,
      title: "Codeforces Contest Rankings",
      description:
        "Secured top placements including 351st in Round 1024 (Div. 2), 82nd in Round 1025 (Div. 2), 120th in Round 1030 (Div. 2), 256th in CodeNite 2025, and 538th in Round 991 (Div. 3).",
      date: "2025",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaCode,
      title: "Codeforces Candidate Master",
      description:
        "Attained Candidate Master ranking with a top rating of 1904, placing in the top few percent worldwide in competitive programming.",
      date: "2025",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaCode,
      title: "CodeChef Contest Rankings",
      description:
        "Achieved top rankings including 37th in Starters 187, 23rd in Starters 189, and 37th in Starters 188 with a peak rating of 1926 (4 Star).",
      date: "2024-2025",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: FaCode,
      title: "CodeChef 4-Star & LeetCode Knight",
      description:
        "Attained 4-Star rating with a peak rating of 1926 on CodeChef and Knight rating (1822) on LeetCode, solving 1500+ problems respectively.",
      date: "2024",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaMedal,
      title: "JEE & NTSE Scholarship",
      description:
        "Qualified for IIT through JEE Mains & Advanced 2023 and earned the prestigious NTSE Scholarship by NCERT for exceptional performance in national-level examinations.",
      date: "2023",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: FaMedal,
      title: "Indian Mathematical Olympiad (IMO)",
      description:
        "Qualified for the prestigious Indian Mathematical Olympiad (IMO) Stage 2 in both Classes 10 and 11, demonstrating exceptional mathematical aptitude.",
      date: "2021-2022",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"
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
            Achievements & <span className="gradient-text">Milestones</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 opacity-20"></div>

            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div className="flex-1 w-full">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-navy-700/50"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} flex-shrink-0`}
                        >
                          <achievement.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {achievement.title}
                            </h3>
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-navy-700 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                              {achievement.date}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block flex-shrink-0">
                    <div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${achievement.color} shadow-lg`}
                    ></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Competitive Programming Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-navy-700/50"
          >
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              Competitive Programming Stats
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/50 dark:bg-navy-800/50 rounded-xl">
                <div className="text-4xl font-bold gradient-text mb-2">
                  1904
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Codeforces Rating
                </div>
                <div className="text-xs text-cyan-600 dark:text-cyan-400 mt-1">
                  Candidate Master
                </div>
              </div>
              <div className="text-center p-6 bg-white/50 dark:bg-navy-800/50 rounded-xl">
                <div className="text-4xl font-bold gradient-text mb-2">
                  1822
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  LeetCode Rating
                </div>
                <div className="text-xs text-cyan-600 dark:text-cyan-400 mt-1">
                  Knight
                </div>
              </div>
              <div className="text-center p-6 bg-white/50 dark:bg-navy-800/50 rounded-xl">
                <div className="text-4xl font-bold gradient-text mb-2">
                  1926
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  CodeChef Rating
                </div>
                <div className="text-xs text-cyan-600 dark:text-cyan-400 mt-1">
                  4 Star
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
