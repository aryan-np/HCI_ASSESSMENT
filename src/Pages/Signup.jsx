import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from '../components/Popup'; // Make sure this exists

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  // const [country, setCountry] = useState('');
  const [error, setError] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password || !phone || !address ) {
      setError('Please fill in all fields');
      return;
    }

    const token = `email: ${email}+password: ${password}`;
    localStorage.setItem('token', token);

    setPopupMessage('Signup successful! Redirecting to login...');
    setShowPopup(true);
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-royal-black flex items-center justify-center px-4">
      <form
        onSubmit={handleSignup}
        className="bg-royal-white text-royal-black p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-royal-gold">Sign Up</h2>

        {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="String"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-royal-gold"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-royal-gold"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-royal-gold"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

  

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-royal-gold"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-royal-gold"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

       

        <button
          type="submit"
          className="bg-royal-gold text-royal-black w-full py-2 rounded-full font-semibold hover:scale-105 transition duration-300"
        >
          Sign Up
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{' '}
          <span
            className="text-royal-gold cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>
      </form>

      {/* Success Popup */}
      <Popup
        show={showPopup}
        message={popupMessage}
        isError={false}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
};

export default Signup;
