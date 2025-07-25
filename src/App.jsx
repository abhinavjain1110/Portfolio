import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const Stars = lazy(() => import('./components/canvas/Stars'));
const Profiles = lazy(() => import('./components/Profiles'));
const Hero = lazy(() => import('./components/Hero'));

// Loading component
const LoadingScreen = () => (
  <div className="flex items-center justify-center h-screen w-full bg-primary">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-white text-lg">Loading...</p>
    </div>
  </div>
);

const PageTransition = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  return (
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <Suspense fallback={<LoadingScreen />}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutAndTech />} />
              <Route path="/project" element={<Works />} />
              <Route path="/profile" element={<Profiles />} />
              <Route path="/contact" element={<ContactAndStars />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </div>
  );
};

const AboutAndTech = () => (
  <>
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Hero />
    </div>
    <About />
    <Tech />
  </>
);

const ContactAndStars = () => (
  <>
    <Contact />
    <Stars />
  </>
);

export default App;
