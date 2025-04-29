import React, { useEffect } from "react";

function Popup({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-gold text-black px-6 py-3 rounded-xl shadow-lg animate-fadeIn">
      <p className="font-medium">{message}</p>
    </div>
  );
}

export default Popup;
