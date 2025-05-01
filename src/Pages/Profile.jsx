import React, { useState } from "react";
import profilePic from "../assets/logo.png";
import { FaCog, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "Aryan Neupane",
    email: "nparyan7@gmail.com",
    phone: "9876543210",
    address: "kathmandu, Nepal",
    profileImage: profilePic,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [message, setMessage] = useState({ type: "", content: "" });
  const [showConfirmLogout, setShowConfirmLogout] = useState(false); // Confirmation modal
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profileImage" && files.length > 0) {
      const file = files[0];
      setFormData({ ...formData, profileImage: file });

      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      setMessage({ type: "error", content: "⚠️ Please fill in all required fields." });
      return;
    }

    setMessage({ type: "success", content: "✅ Profile updated successfully!" });
    console.log("Updated Profile:", formData);
  };

  const handleLogout = () => {
    setShowConfirmLogout(true); // Show confirmation
  };

  const confirmLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { state: { logoutMessage: "👋 You have been logged out successfully." } });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <main className="max-w-5xl mx-auto p-6 pt-24">
        {/* Logout Confirmation Modal */}
        {showConfirmLogout && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
            <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-xl text-white w-[90%] max-w-md text-center">
              <h2 className="text-2xl font-semibold mb-4">Are you sure you want to log out?</h2>
              <div className="flex justify-center gap-6 mt-6">
                <button
                  onClick={confirmLogout}
                  className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition"
                >
                  ✅ Yes
                </button>
                <button
                  onClick={() => setShowConfirmLogout(false)}
                  className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
                >
                  ❌ Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Profile Card */}
        <section className="bg-[#121212] p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-700 border-2 border-gold">
            <img
              src={previewImage || formData.profileImage}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gold">{formData.name}</h2>
            <p className="text-gray-300">{formData.email}</p>
            <p className="text-gray-400">{formData.phone}</p>
            <p className="text-gray-500">{formData.address}</p>
          </div>

          {/* Logout & Settings Buttons */}
          <div className="flex gap-4 self-start md:self-center">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
              title="Logout"
            >
              <FaTrashAlt />
              Logout
            </button>

            <button
              className="flex items-center gap-2 bg-gold text-black px-4 py-2 rounded-full hover:scale-105 transition duration-300"
              title="Settings"
              onClick={() => navigate("/settings")}
            >
              <FaCog />
              Settings
            </button>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-[#121212] p-8 rounded-2xl shadow-lg space-y-6">
          <h3 className="text-2xl font-semibold text-gold mb-4">✏️ Edit Profile</h3>

          {message.content && (
            <div
              className={`p-3 rounded ${
                message.type === "error" ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {message.content}
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            {/* Profile Image Upload */}
            <div>
              <label className="block font-semibold mb-2">Profile Picture</label>
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                onChange={handleChange}
                className="w-full text-sm text-white bg-black border border-gray-600 rounded p-2"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black border border-gray-600 rounded px-4 py-2"
                placeholder="Enter full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black border border-gray-600 rounded px-4 py-2"
                placeholder="Enter email address"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-semibold mb-2">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-black border border-gray-600 rounded px-4 py-2"
                placeholder="Enter phone number"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block font-semibold mb-2">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full bg-black border border-gray-600 rounded px-4 py-2"
                placeholder="Enter full address"
                rows={3}
              />
            </div>

            {/* Save Button */}
            <div className="flex flex-col md:flex-row justify-between gap-4 pt-6">
              <button
                type="submit"
                className="w-full md:w-auto bg-gold text-black px-8 py-3 rounded text-lg hover:scale-105 transition duration-300"
              >
                Save Changes
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Profile;
