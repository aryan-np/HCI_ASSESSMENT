// src/pages/PreBook.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PreBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    comments: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!form.address.trim()) newErrors.address = 'Address is required.';
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
    }, 1000);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-10 px-6">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg relative">
        <button
          onClick={() => navigate("/models")}
          className="absolute top-4 left-4 bg-yellow-500 text-black p-2 rounded-full hover:scale-110 transition"
        >
          <ArrowLeft size={20} />
        </button>

        <h1 className="text-3xl font-bold text-center text-yellow-500 mb-6">Pre-Book This Car</h1>
        <p className="text-center text-gray-700 mb-8">Car ID: <strong>{id}</strong></p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'fullName', label: 'Full Name', type: 'text' },
            { name: 'email', label: 'Email', type: 'email' },
            { name: 'phone', label: 'Phone Number', type: 'tel' },
            { name: 'address', label: 'Address', type: 'text' },
          ].map(({ name, label, type }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
              {errors[name] && <p className="text-sm text-red-500 mt-1">{errors[name]}</p>}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Comments (optional)</label>
          <textarea
            name="comments"
            rows="3"
            value={form.comments}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`mt-8 w-full py-3 rounded text-lg font-semibold transition ${
            loading
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-black text-white hover:bg-yellow-500 hover:text-black'
          }`}
        >
          {loading ? 'Submitting...' : 'Confirm Pre-Booking'}
        </button>

        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
              <h2 className="text-2xl font-bold mb-4 text-black-600">Pre-Booking Successful!</h2>
              <button
                onClick={handlePopupClose}
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreBook;
