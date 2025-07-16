import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('Message sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    } catch (error) {
      alert('Failed to send message.');
      console.error(error);
    }
  };

  return (
    <section className="py-24 bg-[#F8FAFB] text-[#0A1F44]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-[#1E3D58] mb-8">
          Got a project in mind? Reach out — we’re just a click away.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="flex-1 border border-[#ccc] rounded-md p-3" required />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="flex-1 border border-[#ccc] rounded-md p-3" required />
          </div>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border border-[#ccc] rounded-md p-3" required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="border border-[#ccc] rounded-md p-3" required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows="5" className="border border-[#ccc] rounded-md p-3" required></textarea>
          <button type="submit" className="mt-4 bg-[#00B6A3] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#01a394]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
