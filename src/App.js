// src/App.js
import React from "react";
import { motion } from "framer-motion";

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
  return (
    <div className="font-sans text-[#0A1F44] bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" className="h-20" />
          </div>
          <nav className="space-x-6 font-medium text-lg text-[#0A1F44]">
            <a href="#" className="hover:text-[#00B6A3]">Home</a>
            <a href="#challenges" className="hover:text-[#00B6A3]">About Us</a>
            <a href="#portfolio" className="hover:text-[#00B6A3]">Portfolio</a>
            <a href="#contact" className="hover:text-[#00B6A3]">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-24 bg-gradient-to-br from-[#E6F9F7] to-white">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-[#0A1F44]">
          One Ally. Every Brand Need.
        </motion.h2>
        <p className="mt-6 text-lg max-w-xl mx-auto text-[#1E3D58]">
          Your all-in-one brand partner — strategy, design, content and beyond.
        </p>
      </section>

      {/* Challenges Faced in Branding */}
      <section id="challenges" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center text-[#00B6A3] mb-10">Branding is Tough. We Get It.</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {challenges.map((c, i) => (
              <motion.div key={i} className="bg-[#E6F9F7] p-6 rounded-xl shadow hover:shadow-lg transition text-center"
                whileHover={{ scale: 1.05 }}>
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
              <motion.div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
                whileHover={{ scale: 1.05 }}>
                <img src={o.image} alt={o.title} className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-[#0A1F44]">{o.title}</h4>
                <p className="mt-2 text-sm text-[#1E3D58]">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1F44] text-white text-center">
        <h3 className="text-3xl font-semibold">Let’s elevate your brand.</h3>
        <p className="mt-2">Schedule a discovery session with your branding ally.</p>
        <a href="#contact" className="inline-block mt-6 bg-[#00B6A3] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#01a394]">
          Start Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 text-sm text-[#1E3D58] border-t">
        &copy; {new Date().getFullYear()} YourBrand Ally. All rights reserved.
      </footer>
    </div>
  );
}
