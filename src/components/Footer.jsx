// components/Footer.jsx
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Social Media Icons


const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-10 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">About The Royal Oak Drives</h4>
          <p>
            The Royal Oak Drives is your trusted platform for finding premium cars, scheduling test drives,
            and getting expert support. We’re committed to quality, transparency, and trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/models" className="hover:text-white">Browse Cars</a></li>
            <li><a href="/book-test-drive" className="hover:text-white">Book Test Drive</a></li>
            <li><a href="/contact" className="hover:text-white">Support</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Contact</h4>
          <p>Email: support@gmail.com</p>
          <p>Phone: +1 (800) 555-7890</p>
          <p>Location: Kathmandu, Nepal</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Follow Us</h4>
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center space-x-6">
        <a href="https://facebook.com" aria-label="Facebook" className="text-[#E0D6C5] hover:text-white">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" className="text-[#E0D6C5] hover:text-white">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" aria-label="Instagram" className="text-[#E0D6C5] hover:text-white">
          <FaInstagram size={24} />
        </a>
      </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} AutoLux. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
