import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

// --------- COMPONENTS & DATA ---------
const challenges = [
  { title: "Spinning a million plates", desc: "You're juggling everything — branding is just one more plate to drop.", image: "/challenge1.png" },
  { title: "DIY branding falls flat", desc: "Templates and Canva only get you so far. Your brand deserves more.", image: "/challenge2.png" },
  { title: "Managing freelancers", desc: "Too many creatives, too little cohesion. Your brand looks fragmented.", image: "/challenge3.png" },
];

const offerings = [
  { title: "Brand Kits", desc: "Precise brand identity creation", image: "/target.png" },
  { title: "Investor Decks", desc: "Data-backed pitch decks", image: "/bar-chart.png" },
  { title: "Website", desc: "Online brand identity and presence", image: "/web-analytics.png" },
  { title: "Pitch Scripts", desc: "Storytelling through narrative decks", image: "/documentation.png" },
  { title: "Marketing", desc: "Outreach and awareness campaigns", image: "/shopping-online.png" },
  { title: "Event Branding", desc: "Event visuals and rollout", image: "/calendar.png" },
];

// --------- MarqueeOfferings ---------
const MarqueeOfferings = ({ offerings }) => {
  const controls = useAnimation();
  const marqueeRef = useRef(null);

  const CARD_WIDTH = 340 + 32; // card width + gap (px)
  const TOTAL = offerings.length;
  const LOOP_WIDTH = CARD_WIDTH * TOTAL;

  useEffect(() => {
    controls.start({
      x: [0, -LOOP_WIDTH],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 14,
        },
      },
    });
  }, [controls, LOOP_WIDTH]);

  // Pause/Resume on hover
  const handleHoverStart = () => controls.stop();
  const handleHoverEnd = () =>
    controls.start({
      x: [marqueeRef.current?.offsetLeft || 0, -LOOP_WIDTH],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 14,
        },
      },
    });

  return (
    <div className="relative w-full overflow-hidden py-2 select-none">
      <motion.div
        ref={marqueeRef}
        className="flex space-x-8"
        animate={controls}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        style={{ width: LOOP_WIDTH * 2 }}
      >
        {[...offerings, ...offerings].map((o, i) => (
          <motion.div
            key={i}
            className="min-w-[340px] bg-white p-8 rounded-xl shadow-xl text-center mx-2 hover:scale-105 hover:rotate-1 transition-transform duration-300"
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0 6px 32px 0 rgba(0,182,163,0.14)",
              zIndex: 2,
            }}
            initial={false}
          >
            <motion.img
              src={o.image}
              alt={o.title}
              className="w-16 h-16 mx-auto mb-4 drop-shadow-lg"
              whileHover={{ scale: 1.18, rotate: 8 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <h4 className="text-xl font-bold text-[#0A1F44] mb-2">{o.title}</h4>
            <p className="text-md text-[#1E3D58]">{o.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// --------- MAIN APP ---------
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Hero parallax handler
  const handleMouseMove = (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 60;
    const y = (e.clientY - window.innerHeight / 2) / 60;
    setParallax({ x, y });
  };

  return (
    <div className="font-sans text-[#0A1F44] bg-white relative overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
          <img src="/logo.png" alt="logo" className="h-20" />
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 font-medium text-lg text-[#0A1F44]">
            {["/", "/about", "/portfolio", "/contactus"].map((to, idx) => {
              const label = ["Home", "About Us", "Portfolio", "Contact"][idx];
              return (
                <Link
                  key={to}
                  to={to}
                  className="group relative overflow-hidden"
                >
                  {label}
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-0.5 bg-[#00B6A3] w-0 group-hover:w-full transition-all duration-300"
                  />
                </Link>
              );
            })}
          </nav>
          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden focus:outline-none relative z-50"
          >
            <motion.div animate={menuOpen ? { rotate: 45 } : { rotate: 0 }} className="w-8 h-0.5 bg-[#0A1F44] mb-1" />
            <motion.div animate={menuOpen ? { opacity: 0, x: 16 } : { opacity: 1, x: 0 }} className="w-8 h-0.5 bg-[#0A1F44] mb-1" />
            <motion.div animate={menuOpen ? { rotate: -45 } : { rotate: 0 }} className="w-8 h-0.5 bg-[#0A1F44]" />
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 bg-black bg-opacity-40 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                className="fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-lg p-8 space-y-7"
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
              >
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-[#0A1F44] font-bold text-3xl absolute top-4 right-4"
                >
                  ×
                </button>
                {["/", "/about", "/portfolio", "/contactus"].map((to, idx) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className="block text-[#0A1F44] font-semibold text-lg hover:text-[#00B6A3]"
                  >
                    {["Home", "About Us", "Portfolio", "Contact"][idx]}
                  </Link>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Animated Background Watermark */}
      <div className="absolute z-0 left-0 right-0 text-center top-36 pointer-events-none select-none">
        <motion.span
          className="text-[8rem] font-extrabold text-[#E6F9F7] opacity-70 tracking-widest"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1.2 }}
        >
          BRANDING
        </motion.span>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* Hero Section */}
              <section
                className="relative min-h-[70vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#E6F9F7] to-white overflow-hidden"
                onMouseMove={handleMouseMove}
              >
                 <img
    src="/hero-bg.svg"
    alt=""
    className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none"
    draggable="false"
  />
                {/* Morphing blobs */}
                <motion.svg
                  className="absolute left-[-180px] top-[-120px] w-[600px] opacity-20 -z-10"
                  style={{ x: parallax.x, y: parallax.y }}
                  initial={{ scale: 0.7, rotate: 0 }}
                  animate={{ scale: 1.05, rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                  viewBox="0 0 600 600"
                >
                  <path fill="#00B6A3" d="M420.4,347.7Q422,455,321,470.5Q220,486,148.5,393.5Q77,301,167.5,202.5Q258,104,366,152Q474,200,420.4,347.7Z" />
                </motion.svg>
                <motion.svg
                  className="absolute right-[-180px] bottom-[-140px] w-[500px] opacity-20 -z-10"
                  style={{ x: -parallax.x, y: -parallax.y }}
                  initial={{ scale: 0.5, rotate: 0 }}
                  animate={{ scale: 1.1, rotate: -330 }}
                  transition={{ repeat: Infinity, duration: 36, ease: "linear" }}
                  viewBox="0 0 500 500"
                >
                  <path fill="#E9C46A" d="M357.6,277.3Q357,354,285,387.5Q213,421,162.5,360.5Q112,300,176,212.5Q240,125,311.5,176Q383,227,357.6,277.3Z" />
                </motion.svg>
                {/* Animated Main Text */}
                <motion.h2
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.2, duration: 1 }}
                  className="text-6xl md:text-7xl font-black tracking-tight"
                  style={{ textShadow: "0 2px 24px #E6F9F7" }}
                >
                  <span className="inline-block relative">
                    One Ally.
                    {/* Animated Underline */}
                    <motion.span
                      className="absolute left-0 right-0 bottom-0 h-3 bg-[#E9C46A] rounded-lg"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 0.7 }}
                    />
                  </span>
                  <br />
                  <motion.span
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="block text-[#00B6A3]"
                  >
                    Every Brand Need.
                  </motion.span>
                </motion.h2>
                <motion.p
                  className="mt-10 text-xl text-[#1E3D58] font-medium"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.9 }}
                >
                  Your all-in-one brand partner — strategy, design, content and beyond.
                </motion.p>
                


              </section>

              {/* Challenges (Scroll-triggered) */}
              <section id="challenges" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                  <motion.h3
                    className="text-3xl font-semibold text-center text-[#00B6A3] mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Branding is Tough. We Get It.
                  </motion.h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                    {challenges.map((c, i) => (
                      <motion.div
                        key={i}
                        className="relative bg-[#E6F9F7] p-8 rounded-2xl shadow-xl hover:scale-105 hover:rotate-2 hover:shadow-2xl transition text-center"
                        initial={{ y: 100, opacity: 0, rotate: -8 }}
                        whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: i * 0.18 }}
                        whileHover={{ scale: 1.07, rotate: 2 }}
                      >
                        <img src={c.image} alt={c.title} className="w-20 h-20 mx-auto mb-4 drop-shadow-xl" />
                        <h4 className="text-xl font-bold text-[#0A1F44]">{c.title}</h4>
                        <p className="mt-3 text-md text-[#1E3D58]">{c.desc}</p>
                        {/* Animated ripple shape */}
                        <motion.div
                          className="absolute -top-6 -right-6 w-12 h-12 bg-[#E9C46A] rounded-full opacity-20 -z-10"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 3, delay: 0.6 + i }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Offerings (Marquee effect) */}
              <section id="portfolio" className="py-24 bg-[#F8FAFB] relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4">
                  <motion.h3
                    className="text-3xl font-semibold text-center text-[#00B6A3] mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Our Offerings
                  </motion.h3>
                  <motion.p
                    className="text-center mb-8 text-[#1E3D58]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                  >
                    We deliver the brand assets your startup needs at every stage
                  </motion.p>
                  <MarqueeOfferings offerings={offerings} />
                </div>
              </section>

              {/* CTA & Reach Us */}
              <section className="py-24 bg-[#0A1F44] text-white relative">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    className="space-y-5"
                    initial={{ x: -70, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                  >
                    <h3 className="text-3xl font-semibold">Let’s elevate your brand.</h3>
                    <p className="text-lg">Schedule a discovery session with your branding ally.</p>
                    <a
                      href="#contact"
                      className="inline-block bg-[#00B6A3] text-white font-bold px-8 py-3 rounded-2xl text-lg hover:bg-[#01a394] shadow-lg transition"
                    >
                      Start Now
                    </a>
                  </motion.div>
                  <motion.div
                    className="text-right space-y-5 text-[#E9C46A]"
                    initial={{ x: 70, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <div>
                      <h3 className="text-3xl font-semibold mb-5">Reach Us</h3>
                      <p className="text-[#f2e9d0] mb-5">Connect with us on social platforms</p>
                    </div>
                    <div className="flex justify-end gap-6">
                      <a href="https://www.instagram.com/yourbrand_ally?igsh=MTEzbHFtbG51b3JvNA==" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.png" alt="Instagram" className="w-12 h-12" />
                      </a>
                      <a href="https://www.linkedin.com/company/your_brand_ally/" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.png" alt="LinkedIn" className="w-12 h-12" />
                      </a>
                    </div>
                  </motion.div>
                </div>
                {/* Animated decorative circle */}
                <motion.div
                  className="absolute -top-16 right-12 w-48 h-48 bg-[#E9C46A] rounded-full opacity-15 blur-2xl"
                  animate={{ scale: [1, 1.09, 1] }}
                  transition={{ repeat: Infinity, duration: 7 }}
                />
              </section>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <footer className="bg-white text-center py-7 text-base text-[#1E3D58] border-t font-medium z-40 relative">
        &copy; {new Date().getFullYear()} YourBrand Ally. All rights reserved.
      </footer>
    </div>
  );
}
