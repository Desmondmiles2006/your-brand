import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 text-[#0A1F44] space-y-20">
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-[#E6F9F7] to-white py-16 rounded-xl shadow-sm">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl font-bold mb-6 text-[#0A1F44]"
        >
          One Ally. Every Brand Need.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-[#1E3D58] max-w-3xl mx-auto"
        >
          At YourBrand Ally, we believe early-stage startups deserve branding that's not just beautiful — but strategic, scalable, and aligned with their vision.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg text-[#1E3D58]"
        >
          We’re not your typical design agency. We’re your Chief Branding Officer — on subscription.
        </motion.p>
      </section>

      {/* Why We Exist */}
      <section className="bg-[#F8FAFB] py-14 px-6 rounded-xl shadow-sm">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-semibold text-center text-[#00B6A3]"
        >
          Why We Exist
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[#1E3D58] text-center max-w-3xl mx-auto mt-4"
        >
          Startups juggle product, fundraising, marketing — and branding often gets pushed to the bottom of the list. But in today’s world, branding is your first impression.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-[#1E3D58] text-center max-w-3xl mx-auto mt-4"
        >
          From logo kits and investor decks to websites and event branding — we take full ownership of your brand, so you don’t have to.
        </motion.p>
      </section>

      {/* Who We Are */}
      <section className="bg-[#E6F9F7] py-14 px-6 rounded-xl shadow-sm">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-semibold text-center text-[#0A1F44]"
        >
          Who We Are
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[#1E3D58] text-center max-w-3xl mx-auto mt-4"
        >
          We're a team of brand strategists, designers, storytellers, and startup thinkers. We've worked with founders across sectors and stages — from MVP to Series A — and we understand how fast things move.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-[#1E3D58] text-center max-w-3xl mx-auto mt-4"
        >
          We act like your in-house brand team — just way more efficient.
        </motion.p>
      </section>

      {/* How We Work */}
      <section className="bg-[#F8FAFB] py-14 px-6 rounded-xl shadow-sm">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-semibold text-center text-[#00B6A3]"
        >
          How We Work
        </motion.h2>
        <ul className="list-disc pl-6 text-lg text-[#1E3D58] max-w-3xl mx-auto mt-6 space-y-2">
          <li>Monthly subscriptions, no bloated retainers</li>
          <li>Fast creative turnaround</li>
          <li>One point of contact (Your Brand Ally)</li>
          <li>Strategy + execution, all under one roof</li>
        </ul>
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[#1E3D58] italic border-l-4 border-[#00B6A3] pl-6 max-w-3xl mx-auto mt-6"
        >
          "Whether you're building your first pitch deck or scaling your brand across channels, we're with you — every step of the way."
        </motion.blockquote>
      </section>

      {/* Final CTA */}
      <section className="text-center bg-gradient-to-r from-white to-[#E6F9F7] py-16 rounded-xl shadow-sm">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-semibold text-[#0A1F44]"
        >
          Let’s build a brand that speaks your vision.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[#1E3D58] mt-2"
        >
          The mindful way. The founder-first way.
        </motion.p>
      </section>
    </div>
  );
}