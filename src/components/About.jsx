import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [imgError, setImgError] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10; // -10 to 10 degrees
    const rotateY = ((x - centerX) / centerX) * 10; // -10 to 10 degrees
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
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
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I am a third-year{" "}
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                    B.Tech in Electrical Engineering
                  </span>{" "}
                  student at the{" "}
                  <span className="font-semibold">Indian Institute of Technology (IIT), Dhanbad</span>{" "}
                  with a{" "}
                  <span className="font-semibold">CGPA of 7.52/10.0</span>, currently working as a{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    Software Engineering Intern
                  </span>{" "}
                  at AeroseInc (AEROBO Cloud) in Tokyo, Japan (Remote). In my intern, I engineered the "Video Calculation Screen" for AEROBO Cloud, integrating Go backend APIs and request payload mapping, which reduced failed job submissions by 25% during development and testing.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  My technical expertise spans{" "}
                  <span className="font-semibold">full-stack development</span> with proficiency in{" "}
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                    JavaScript, TypeScript, Go, React.js, Express.js, and Tailwind CSS
                  </span>
                  . I have architected scalable applications including "Chatting Platform," a real-time messaging app with Socket.IO, JWT authentication, and Groq AI SDK integration, and "Blogging Platform," a full-stack CMS with 100% secure JWT-based authentication and CRUD operations, reducing unauthorized access by 99%.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Complementing my development skills is a rigorous background in algorithmic problem-solving. I am a{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    Codeforces Candidate Master (Rating: 1904)
                  </span>{" "}
                  ranking in the top few percent worldwide, with top placements including 82nd in Round 1025 (Div. 2) and 120th in Round 1030 (Div. 2). On CodeChef, I maintain a{" "}
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    4 Star rating (1926)
                  </span>{" "}
                  with recent achievements including 23rd place in Starters 189 and 37th in Starters 187. My LeetCode rating is{" "}
                  <span className="font-semibold text-orange-600 dark:text-orange-400">1822</span>{" "}
                  as a Knight.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-white/50 dark:bg-navy-800/50 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold gradient-text">2000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Problems Solved
                  </div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-navy-800/50 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold gradient-text">1148th</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Meta Hacker Cup
                  </div>
                </div>
                <div className="text-center p-4 bg-white/50 dark:bg-navy-800/50 rounded-xl backdrop-blur-sm hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold gradient-text">1904</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    CF Rating
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="order-1 md:order-2 flex justify-center"
            >
              <div
                ref={imageRef}
                className="relative cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-xl opacity-50 animate-glow"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-2xl bg-navy-800 flex items-center justify-center">
                    {/* Profile image: drop your real photo as /public/profile.jpg.
                        If the image fails to load, we fall back to the emoji. */}
                    {!imgError ? (
                      <img
                        src="/ugb1.jpg"
                        alt="Unmesh — profile"
                        className="w-full h-full object-cover rounded-2xl"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="text-8xl">👨‍💻</div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
