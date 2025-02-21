import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./components/About";
import Contact from './components/Contact';
import Experience from './components/Experience';
import Feedbacks from './components/Feedbacks';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Tech from './components/Tech';
import Works from './components/Works';
import Stars from './components/canvas/Stars';
import Profiles from "./components/Profiles";

const App = () => {
  
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar/>
      </div>
        <Routes>
        <Route path="/" element={<AboutAndTech />} />
        <Route path="/project" element={<Works />} />
        <Route path="/profile" element={<Profiles />} />
        {/* /*<div className="relative z-0">*/ }
        <Route path="/contact" element={<ContactAndStars />} />
        {/* </div> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}
const AboutAndTech = () => (
  <>
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
    <Hero/>
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

export default App
