// src/pages/Contact.js
import React from 'react';

export default function Contact() {
  return (
    <section className="py-24 bg-[#F8FAFB] text-[#0A1F44]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-[#1E3D58] mb-8">
          Got a project in mind? Reach out — we’re just a click away.
        </p>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="First Name" className="flex-1 border border-[#ccc] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#00B6A3]" />
            <input type="text" placeholder="Last Name" className="flex-1 border border-[#ccc] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#00B6A3]" />
          </div>
          <input type="email" placeholder="Email" className="border border-[#ccc] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#00B6A3]" />
          <input type="tel" placeholder="Phone Number" className="border border-[#ccc] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#00B6A3]" />
          <textarea placeholder="Your Message" rows="5" className="border border-[#ccc] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#00B6A3]"></textarea>
          <button type="submit" className="mt-4 bg-[#00B6A3] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#01a394]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}