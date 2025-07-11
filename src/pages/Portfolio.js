import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "EPIFUNDS",
    description: "Fund management for modern investors.",
    services: "Branding • Decks • UI Web",
    image: "/epifunds.png",
    bg: "bg-yellow-300",
  },
  {
    name: "MODEFE",
    description: "D2C carpet brand elevating home aesthetics",
    services: "Logo • Moodboard • Reels • Creatives",
    image: "/modefe.png",
    bg: "bg-emerald-500",
  },
  {
    name: "CLARITYDECK",
    description: "SaaS for investor communications.",
    services: "Brand Kit • Investor Deck • Website",
    image: "/claritydeck.png",
    bg: "bg-gray-200",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-[#0A1F44] py-24 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold"
          >
            Brand Stories We’re Proud Of
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-[#D0D9E1]"
          >
            From bold new startups to scaling ventures, here’s how we brought their vision to life — consistently, creatively, and fast.
          </motion.p>
        </div>

        {/* Marquee Projects Section - horizontal for md and up */}
        <div className="relative h-[420px] overflow-hidden mb-4">
          <div className="md:hidden absolute w-full flex flex-col items-center">
            <div className="relative group h-[360px] w-[340px] overflow-hidden">
              <div className="animate-marquee-vertical flex flex-col space-y-6 group-hover:paused">
                {[...projects, ...projects].map((proj, idx) => (
                  <motion.div
                    key={idx}
                    className={`rounded-xl p-5 shadow-lg ${proj.bg} text-[#0A1F44] max-w-sm`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="rounded-md mb-3 w-full h-36 object-cover"
                    />
                    <h3 className="text-xl font-bold mb-1">{proj.name}</h3>
                    <p className="text-sm mb-1">{proj.description}</p>
                    <p className="text-xs text-[#1E3D58]">{proj.services}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block overflow-hidden">
            <div className="group overflow-hidden whitespace-nowrap">
              <div className="inline-flex animate-marquee-horizontal space-x-6 group-hover:paused">
                {[...projects, ...projects].map((proj, idx) => (
                  <motion.div
                    key={idx}
                    className={`rounded-xl p-5 shadow-lg ${proj.bg} text-[#0A1F44] min-w-[300px]`}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="rounded-md mb-3 w-full h-36 object-cover"
                    />
                    <h3 className="text-xl font-bold mb-1">{proj.name}</h3>
                    <p className="text-sm mb-1">{proj.description}</p>
                    <p className="text-xs text-[#1E3D58]">{proj.services}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="text-center mt-10">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl italic text-[#F1F1F1]"
          >
            “They got our tone and brand language better than we did.”
          </motion.blockquote>
          <p className="mt-2 text-sm text-[#A6B1C2]">Founder, Epifunds</p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12 text-white text-center">
          <div>
            <p className="text-2xl font-bold">48 hrs</p>
            <p className="text-sm">average delivery time</p>
          </div>
          <div>
            <p className="text-2xl font-bold">250+</p>
            <p className="text-sm">creative assets delivered</p>
          </div>
          <div>
            <p className="text-2xl font-bold">100%</p>
            <p className="text-sm">decks investor-ready</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-semibold mb-4"
          >
            Ready to Build a Brand That Stands Out?
          </motion.h3>
          <a
            href="/contactus"
            className="inline-block bg-[#FDCB6E] hover:bg-[#fbc02d] text-[#0A1F44] font-bold px-6 py-3 rounded-xl"
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* Marquee Styles */}
      <style>
        {`
          @keyframes marquee-vertical {
            0% { transform: translateY(0%); }
            100% { transform: translateY(-50%); }
          }
          .animate-marquee-vertical {
            animation: marquee-vertical 15s linear infinite;
            animation-play-state: running;
          }
          .group:hover .animate-marquee-vertical {
            animation-play-state: paused;
          }

          @keyframes marquee-horizontal {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-horizontal {
            animation: marquee-horizontal 25s linear infinite;
            animation-play-state: running;
          }
          .group:hover .animate-marquee-horizontal {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
}
