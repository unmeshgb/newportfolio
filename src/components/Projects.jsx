import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaInstagram,
} from "react-icons/fa";

const Projects = ({ onLightboxChange }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxProjectIndex, setLightboxProjectIndex] = useState(null);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
      onLightboxChange?.(true); // Notify parent
    } else {
      document.body.style.overflow = "unset";
      onLightboxChange?.(false); // Notify parent
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen, onLightboxChange]);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && lightboxOpen) {
        setLightboxOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [lightboxOpen]);

  const openLightbox = (image, projectIndex) => {
    setLightboxImage(image);
    setLightboxProjectIndex(projectIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
    setLightboxProjectIndex(null);
  };

  const navigateLightbox = (direction) => {
    if (lightboxProjectIndex === null) return;
    const project = projects[lightboxProjectIndex];
    if (!project.images) return;

    const currentIdx = currentImageIndex[lightboxProjectIndex] || 0;
    let newIdx;

    if (direction === "next") {
      newIdx = (currentIdx + 1) % project.images.length;
    } else {
      newIdx = (currentIdx - 1 + project.images.length) % project.images.length;
    }

    setCurrentImageIndex((prev) => ({
      ...prev,
      [lightboxProjectIndex]: newIdx,
    }));
    setLightboxImage(project.images[newIdx]);
  };

  const projects = [
    {
      title: "Chatting Platform",
      description:
        "Engineered a real-time chat application with secure JWT-based authentication, Socket.IO integration, and online presence tracking for user connectivity and messaging. Optimized performance and media handling through lazy loading, Cloudinary storage with automatic cleanup, and UI animations using React and React-Bits. Integrated an AI-powered chat assistant using Groq SDK with admin-controlled access and usage management, enhancing interactivity and system scalability.",
      tech: ["React", "Express.js", "Socket.io", "Node.js", "MongoDB", "Groq SDK", "JWT", "Cloudinary"],
      github: "https://github.com/unmeshgb/Chatspace",
      demo: "https://chatspace-avc.vercel.app",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Blogging Platform",
      description:
        "Designed and deployed a full-stack web application using MERN stack architecture, implementing APIs and database integration for efficient data management and retrieval. Implemented a 100% secure user authentication system with JWT tokens and middleware-based authorization, reducing unauthorized access attempts by 99%, exceeding security compliance standards by 15%. Developed backend services supporting features including CRUD operations and analytics tracking.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JWT",
        "Tailwind CSS",
      ],
      github: "https://github.com/unmeshgb/Blogspace",
      demo: "https://blogspace-mern-website-frontend.onrender.com",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Simulated Water Management System",
      description:
        "Developed and integrated a water management dashboard in a team of 5 using React.js and Python, implementing real-time data visualization for monitoring water flow, pressure, and temperature. Implemented statistical analysis algorithms for anomaly detection, enabling identification of abnormal patterns in water flow, pressure, and temperature for improved operational monitoring. Secured 1st place in the respective problem statement at Agglomeration 2.O Hackathon by delivering an innovative solution through data-driven insights and efficient resource monitoring.",
      tech: ["React", "Tailwind CSS", "Python"],
      github: "https://github.com/unmeshgb/aquaguard_ag31",
      gradient: "from-teal-400 to-blue-500",
    },
    {
      title: "Editor.io",
      description:
        "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview. Both the editor supports auto save of work using Local Storage.",
      tech: ["React.js", "HTML", "CSS", "JavaScript", "Local Storage", "Markdown"],
      github: "https://github.com/unmeshgb/Editor.io",
      demo: "https://editor-io-one.vercel.app/",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "InternHelper",
      description:
        "An automation script that logs into Internshala, fills out user profile information, and applies for internships.",
      tech: ["Python", "Automation", "Scripting"],
      github: "https://github.com/unmeshgb/InternHelper",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Chatify",
      description:
        "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      tech: ["React.js", "Material-UI", "Firebase", "Real-time Messaging"],
      github: "https://github.com/unmeshgb/Chatify",
      demo: "https://chatify-49.web.app/",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Bits-0f-C0de",
      description:
        "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
      tech: ["Next.js", "Tailwind CSS", "Markdown", "Dark Mode"],
      github: "https://github.com/unmeshgb/Bits-0f-C0de",
      demo: "https://bits-of-code-liart.vercel.app/",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      title: "One Stop Movie (OSM)",
      description:
        "One Stop Movie (OSM) is a fully responsive website, which is responsive for all devices. It is completely built using HTML, CSS, JavaScript with Firebase authentication as a backend. You can create a account(SignUp) with your email address and created password for using OSM which is a quick process after which you can LogIn using your credentials.",
      tech: ["HTML", "CSS", "JavaScript", "Firebase Authentication"],
      github: "https://github.com/unmeshgb/one_stop",
      demo: "https://osm-avc24.netlify.app",
      gradient: "from-red-500 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="container mx-auto max-w-7xl">
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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white/50 dark:bg-navy-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-navy-700/50"
              >
                {/* Gradient header */}
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                ></div>

                {/* Project Images Carousel */}
                {project.images && project.images.length > 0 && (
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-navy-900 dark:to-navy-800 overflow-hidden group/image flex items-center justify-center">
                    <motion.img
                      key={currentImageIndex[index] || 0}
                      src={project.images[currentImageIndex[index] || 0]}
                      alt={`${project.title} screenshot ${
                        (currentImageIndex[index] || 0) + 1
                      }`}
                      className="max-w-full max-h-full object-contain cursor-zoom-in"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      onClick={() =>
                        openLightbox(
                          project.images[currentImageIndex[index] || 0],
                          index
                        )
                      }
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />

                    {/* Image Navigation - More visible on hover */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => ({
                              ...prev,
                              [index]:
                                ((prev[index] || 0) -
                                  1 +
                                  project.images.length) %
                                project.images.length,
                            }));
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/90 text-white rounded-full transition-all opacity-0 group-hover/image:opacity-100 hover:scale-110 z-10"
                          aria-label="Previous image"
                        >
                          <FaChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => ({
                              ...prev,
                              [index]:
                                ((prev[index] || 0) + 1) %
                                project.images.length,
                            }));
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/90 text-white rounded-full transition-all opacity-0 group-hover/image:opacity-100 hover:scale-110 z-10"
                          aria-label="Next image"
                        >
                          <FaChevronRight className="w-5 h-5" />
                        </button>

                        {/* Image indicators - More prominent */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                          {project.images.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex((prev) => ({
                                  ...prev,
                                  [index]: imgIndex,
                                }));
                              }}
                              className={`h-2 rounded-full transition-all ${
                                (currentImageIndex[index] || 0) === imgIndex
                                  ? "bg-white w-8 shadow-lg"
                                  : "bg-white/60 w-2 hover:bg-white/90 hover:w-4"
                              }`}
                              aria-label={`Go to image ${imgIndex + 1}`}
                            />
                          ))}
                        </div>

                        {/* Image counter overlay */}
                        <div className="absolute top-3 right-3 px-3 py-1 bg-black/70 text-white text-xs font-semibold rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity">
                          {(currentImageIndex[index] || 0) + 1} /{" "}
                          {project.images.length}
                        </div>
                      </>
                    )}

                    {/* Zoom hint overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="px-4 py-2 bg-black/70 text-white text-sm font-medium rounded-lg opacity-0 group-hover/image:opacity-100 transition-opacity transform scale-90 group-hover/image:scale-100">
                        🔍 Click to view full screen
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-700 dark:text-cyan-300 rounded-full border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-full transition-all hover:scale-110 hover:rotate-90 z-[10000] shadow-lg border border-white/30"
              aria-label="Close"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Full screen view"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />

              {/* Navigation Buttons for Multiple Images */}
              {lightboxProjectIndex !== null &&
                projects[lightboxProjectIndex].images &&
                projects[lightboxProjectIndex].images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateLightbox("prev");
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all hover:scale-110"
                      aria-label="Previous image"
                    >
                      <FaChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateLightbox("next");
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all hover:scale-110"
                      aria-label="Next image"
                    >
                      <FaChevronRight className="w-6 h-6" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 text-white text-sm font-semibold rounded-full">
                      {(currentImageIndex[lightboxProjectIndex] || 0) + 1} /{" "}
                      {projects[lightboxProjectIndex].images.length}
                    </div>
                  </>
                )}
            </motion.div>

            {/* Instructions */}
            <div className="absolute bottom-4 right-4 text-white/60 text-sm">
              Press <kbd className="px-2 py-1 bg-white/10 rounded">ESC</kbd> to
              close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
