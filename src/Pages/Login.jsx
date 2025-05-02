import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Popup from '../components/Popup';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // 👈 Added state
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setPopupMessage('Please enter both email and password');
      setIsError(true);
      setShowPopup(true);
      return;
    }

    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      const parts = storedToken.split('+');
      const storedEmail = parts[0]?.replace('email: ', '') || '';
      const storedPassword = parts[1]?.replace('password: ', '') || '';

      if (email === storedEmail && password === storedPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        setPopupMessage('Login successful! Redirecting...');
        setIsError(false);
        setShowPopup(true);
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        setPopupMessage('Invalid email or password');
        setIsError(true);
        setShowPopup(true);
      }
    } else {
      setPopupMessage('No account found. Please sign up first.');
      setIsError(true);
      setShowPopup(true);
    }
  };

  const fillSavedCredentials = () => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      const parts = storedToken.split('+');
      const emailFromToken = parts[0]?.replace('email: ', '') || '';
      const passwordFromToken = parts[1]?.replace('password: ', '') || '';
      setEmail(emailFromToken);
      setPassword(passwordFromToken);
    } else {
      setPopupMessage('No saved credentials found');
      setIsError(true);
      setShowPopup(true);
    }
  };

  return (
    <div className="min-h-screen bg-royal-black flex items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="relative bg-royal-white text-royal-black p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          type="button"
          className="absolute top-4 left-4 bg-royal-gold text-royal-black p-2 rounded-full hover:scale-110 transition duration-300"
        >
          <ArrowLeft size={20} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-royal-gold">
          Login to Royal Oak
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:border-royal-gold"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-2">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-royal-gold"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Translucent Checkbox */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            className="mr-2 opacity-60 cursor-pointer"
          />
          <label htmlFor="showPassword" className="text-sm text-gray-600 select-none">
            Show Password
          </label>
        </div>

        <button
          type="submit"
          className="bg-royal-gold text-royal-black w-full py-2 rounded-full font-semibold hover:scale-105 transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm mt-4">
          <button
            type="button"
            onClick={fillSavedCredentials}
            className="text-royal-gold underline"
          >
            Use saved credentials
          </button>
        </p>

        <p className="text-center text-sm mt-2">
          Don’t have an account?{' '}
          <span
            className="text-royal-gold cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </span>
        </p>
      </form>

      {/* Popup Message */}
      <Popup
        show={showPopup}
        message={popupMessage}
        isError={isError}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
};

export default Login;
