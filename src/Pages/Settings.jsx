import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Settings() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleSave = () => {
    if (password && password !== confirmPassword) {
      alert("❌ Passwords do not match.");
      return;
    }

    setSuccessMessage("✅ Your settings have been updated.");
    setPassword("");
    setConfirmPassword("");
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const handleDeleteAccount = () => {
    setShowDeleteModal(false);
    setSuccessMessage("⚠️ Your account has been scheduled for deletion.");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
        <Navbar />
      <div className="flex">
        <main className="flex-1 p-6 flex justify-center">
          <div className="w-full max-w-2xl space-y-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">⚙️ Settings</h1>
              <button
                onClick={() => setShowDeleteModal(true)}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow transition"
              >
                Delete Account
              </button>
            </div>

            {successMessage && (
              <div className="p-4 bg-green-700 text-white rounded-lg shadow">
                {successMessage}
              </div>
            )}

           
            {/* Security Settings */}
            <section className="bg-[#121212] p-6 rounded-xl shadow-md space-y-5">
              <h2 className="text-2xl font-semibold mb-4">🔐 Update Password</h2>

              <div className="space-y-4">
                <div>
                  <label className="block mb-1">New Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#1f1f1f] border border-gray-600 p-3 rounded-md focus:ring-2 focus:ring-gold focus:outline-none"
                    placeholder="Enter new password"
                  />
                </div>

                <div>
                  <label className="block mb-1">Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-[#1f1f1f] border border-gray-600 p-3 rounded-md focus:ring-2 focus:ring-gold focus:outline-none"
                    placeholder="Confirm password"
                  />
                </div>
              </div>
            </section>

            {/* Notification Settings */}
            <section className="bg-[#121212] p-6 rounded-xl shadow-md space-y-5">
              <h2 className="text-2xl font-semibold mb-4">🔔 Notifications</h2>

              <div className="flex items-center justify-between">
                <span>Email Notifications</span>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={emailNotifications}
                    onChange={() => setEmailNotifications(!emailNotifications)}
                  />
                  <div
                    className={`w-12 h-6 bg-gray-700 rounded-full relative transition ${
                      emailNotifications ? "bg-green-500" : "bg-gray-700"
                    }`}
                  >
                    <div
                      className={`absolute w-6 h-6 bg-white rounded-full top-0 left-0 transition ${
                        emailNotifications ? "translate-x-6" : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <span>SMS Notifications</span>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={smsNotifications}
                    onChange={() => setSmsNotifications(!smsNotifications)}
                  />
                  <div
                    className={`w-12 h-6 bg-gray-700 rounded-full relative transition ${
                      smsNotifications ? "bg-green-500" : "bg-gray-700"
                    }`}
                  >
                    <div
                      className={`absolute w-6 h-6 bg-white rounded-full top-0 left-0 transition ${
                        smsNotifications ? "translate-x-6" : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
            </section>

            {/* Save Button */}
            <div className="flex justify-start">
              <button
                onClick={handleSave}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow transition-all"
              >
                Save Changes
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#1f1f1f] p-8 rounded-lg space-y-5 shadow-xl text-center text-white">
            <h2 className="text-2xl font-bold text-red-500">Delete Account?</h2>
            <p className="text-gray-400">
              This action cannot be undone. Are you sure you want to proceed?
            </p>
            <div className="flex justify-center gap-6 pt-4">
              <button
                onClick={handleDeleteAccount}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
