import React, { useState } from "react";
import { motion } from "framer-motion";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

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

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-[#0A1F44] bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
          <img src="/logo.png" alt="logo" className="h-20" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 font-medium text-lg text-[#0A1F44]">
            <Link to="/" className="hover:text-[#00B6A3]">Home</Link>
            <Link to="/about" className="hover:text-[#00B6A3]">About Us</Link>
            <Link to="/portfolio" className="hover:text-[#00B6A3]">Portfolio</Link>
            <Link to="/contactus" className="hover:text-[#00B6A3]">Contact</Link>
          </nav>

          {/* Mobile Hamburger Icon */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
            <svg className="w-6 h-6 text-[#0A1F44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <>
            <div onClick={() => setMenuOpen(false)} className="fixed inset-0 bg-black bg-opacity-40 z-40"></div>
            <div className="fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-lg p-6 space-y-6 transition-transform transform translate-x-0 md:hidden">
              <button onClick={() => setMenuOpen(false)} className="text-[#0A1F44] font-bold text-xl absolute top-4 right-4">×</button>
              <Link onClick={() => setMenuOpen(false)} to="/" className="block text-[#0A1F44] font-medium hover:text-[#00B6A3]">Home</Link>
              <Link onClick={() => setMenuOpen(false)} to="/about" className="block text-[#0A1F44] font-medium hover:text-[#00B6A3]">About Us</Link>
              <Link onClick={() => setMenuOpen(false)} to="/portfolio" className="block text-[#0A1F44] font-medium hover:text-[#00B6A3]">Portfolio</Link>
              <Link onClick={() => setMenuOpen(false)} to="/contactus" className="block text-[#0A1F44] font-medium hover:text-[#00B6A3]">Contact</Link>
            </div>
          </>
        )}
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Hero */}
              <section className="text-center py-24 bg-gradient-to-br from-[#E6F9F7] to-white">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl font-bold text-[#0A1F44]">
                  One Ally. Every Brand Need.
                </motion.h2>
                <p className="mt-6 text-lg max-w-xl mx-auto text-[#1E3D58]">
                  Your all-in-one brand partner — strategy, design, content and beyond.
                </p>
              </section>

              {/* Challenges */}
              <section id="challenges" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                  <h3 className="text-3xl font-semibold text-center text-[#00B6A3] mb-10">Branding is Tough. We Get It.</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {challenges.map((c, i) => (
                      <motion.div key={i} className="bg-[#E6F9F7] p-6 rounded-xl shadow hover:shadow-lg transition text-center" whileHover={{ scale: 1.05 }}>
                        <img src={c.image} alt={c.title} className="w-16 h-16 mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-[#0A1F44]">{c.title}</h4>
                        <p className="mt-2 text-sm text-[#1E3D58]">{c.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Offerings */}
              <section id="portfolio" className="py-20 bg-[#F8FAFB]">
                <div className="max-w-6xl mx-auto px-4">
                  <h3 className="text-3xl font-semibold text-center text-[#00B6A3] mb-4">Our Offerings</h3>
                  <p className="text-center mb-8 text-[#1E3D58]">We Deliver the Brand Assets your startup needs at Every Stage</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {offerings.map((o, i) => (
                      <motion.div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center" whileHover={{ scale: 1.05 }}>
                        <img src={o.image} alt={o.title} className="w-12 h-12 mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-[#0A1F44]">{o.title}</h4>
                        <p className="mt-2 text-sm text-[#1E3D58]">{o.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA & Reach Us */}
              <section className="py-20 bg-[#0A1F44] text-white">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-semibold">Let’s elevate your brand.</h3>
                    <p>Schedule a discovery session with your branding ally.</p>
                    <a href="#contact" className="inline-block bg-[#00B6A3] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#01a394]">
                      Start Now
                    </a>
                  </div>
                  <div className="text-right space-y-4 text-[#E9C46A]">
                    <div>
                      <h3 className="text-3xl font-semibold mb-5">Reach Us</h3>
                      <p className="text-[#f2e9d0] mb-5">Connect with us on social platforms</p>
                    </div>
                    <div className="flex justify-end gap-4">
                      <a href="https://www.instagram.com/yourbrand_ally?igsh=MTEzbHFtbG51b3JvNA==" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.png" alt="Instagram" className="w-12 h-12" />
                      </a>
                      <a href="https://www.linkedin.com/company/your_brand_ally/" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.png" alt="LinkedIn" className="w-12 h-12" />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <footer className="bg-white text-center py-6 text-sm text-[#1E3D58] border-t">
        &copy; {new Date().getFullYear()} YourBrand Ally. All rights reserved.
      </footer>
    </div>
  );
}
