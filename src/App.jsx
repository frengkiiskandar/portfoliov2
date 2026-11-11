import { useEffect, useState } from "react";
import {
  // AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
// import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Pause, Play } from 'lucide-react'
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import Portfolio from "./components/sections/Portfolio.jsx";
import Awards from "./components/sections/Awards.jsx";
// import Breakdown from "./components/sections/Breakdown.jsx";
import About from "./components/sections/About.jsx";
import Journey from "./components/sections/Journey.jsx";
import Contact from "./components/sections/Contact.jsx";

export const EASE = [0.22, 1, 0.36, 1];
export const MotionContext = null;

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const [motionEnabled, setMotionEnabled] = useState(() => {
    try {
      return localStorage.getItem("renando-motion") !== "off";
    } catch {
      return true;
    }
  });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (prefersReducedMotion) setMotionEnabled(false);
  }, [prefersReducedMotion]);

  const toggleMotion = () => {
    setMotionEnabled((current) => {
      const next = !current;
      try {
        localStorage.setItem("renando-motion", next ? "on" : "off");
      } catch {}
      return next;
    });
  };

  return (
    <div className="site-shell px-2 lg:px-20 xl:px-36">
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[2px] origin-left bg-crimson"
        style={{ scaleX: motionEnabled ? progress : scrollYProgress }}
      />
      <Header motionEnabled={motionEnabled} onToggleMotion={toggleMotion} />
      <main>
        <Hero motionEnabled={motionEnabled} />
        <Portfolio motionEnabled={motionEnabled} />
        <Awards motionEnabled={motionEnabled} />
        {/* <Breakdown motionEnabled={motionEnabled} /> */}
        <About motionEnabled={motionEnabled} />
        <Journey motionEnabled={motionEnabled} />
        <Contact motionEnabled={motionEnabled} />
      </main>
      <Footer />
    </div>
  );
}
