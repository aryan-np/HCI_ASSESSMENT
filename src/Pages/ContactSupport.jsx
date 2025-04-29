// pages/ContactSupport.jsx
import { useState } from 'react';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi';

const ContactSupport = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    alert('Message sent! Our team will contact you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white text-black py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl font-bold text-gold mb-6">Contact & Support</h1>
          <p className="mb-6 text-gray-700">
            Need help? Our support team is here to assist you with any questions regarding bookings, test drives,
            customization, or offers. We’re committed to giving you the smoothest luxury experience.
          </p>

          <div className="space-y-5 text-sm">
            <div className="flex items-start space-x-3">
              <HiOutlineMail className="text-gold text-xl" />
              <p><span className="font-semibold">Email:</span> support@The Royal Oak Drives.com</p>
            </div>

            <div className="flex items-start space-x-3">
              <HiOutlinePhone className="text-gold text-xl" />
              <p><span className="font-semibold">Phone:</span> +1 (800) 555-2025</p>
            </div>

            <div className="flex items-start space-x-3">
              <HiOutlineClock className="text-gold text-xl" />
              <p><span className="font-semibold">Support Hours:</span> Mon - Fri, 9 AM to 6 PM</p>
            </div>

            <div className="flex items-start space-x-3">
              <HiOutlineLocationMarker className="text-gold text-xl" />
              <p><span className="font-semibold">Address:</span> 500 The Royal Oak Drives Ave, Motor City, USA</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-silver rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-black mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded border border-black outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded border border-black outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded border border-black outline-none"
            ></textarea>
            {error && <p className="text-red-600 font-medium text-sm">{error}</p>}
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 rounded hover:bg-gold hover:text-black transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Optional: FAQ Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <h3 className="text-2xl font-bold mb-6 text-gold">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-semibold">Q: Can I reschedule my test drive?</p>
            <p className="text-gray-700">Yes, simply go to your dashboard and click on "Reschedule" under Test Drive bookings.</p>
          </div>
          <div>
            <p className="font-semibold">Q: What if I want to change my customization after booking?</p>
            <p className="text-gray-700">You can modify your customization before final confirmation. Contact support if already booked.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
