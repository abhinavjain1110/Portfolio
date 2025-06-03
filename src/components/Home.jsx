import { motion, easeInOut } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut"
    }
  })
};

const Home = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-gradient-to-b from-primary via-[#0a0a20] to-[#151030]">
      {/* Background animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(145,94,255,0.1)_0,transparent_70%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      </div>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto`}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className={`${styles.heroHeadText} text-white mb-4`}>
            Welcome to My <span className="text-[#915eff]">Portfolio</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-3xl mx-auto`}>
            Full Stack Developer | Creative Problem Solver | Tech Enthusiast
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[
            { title: "About Me", path: "/about", description: "Discover my journey and expertise in software development" },
            { title: "Projects", path: "/project", description: "Explore my portfolio of innovative web applications" },
            { title: "Profile", path: "/profile", description: "View my professional achievements and skills" }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <Link to={item.path} className="block h-full">
                <motion.div
                  whileHover={{ 
                    scale: 1.03,
                    y: -5
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  className="relative bg-tertiary/80 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col justify-between transform-gpu"
                >
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  
                  {/* Card content */}
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-white font-bold text-2xl mb-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-secondary text-lg leading-relaxed">{item.description}</p>
                  </div>
                  
                  <motion.div 
                    className="relative z-10 mt-6 text-purple-400 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <span className="font-medium">Explore</span>
                    <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home; 