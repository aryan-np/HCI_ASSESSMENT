// pages/UserDashboard.jsx
const UserDashboard = () => {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gold mb-6">User Dashboard</h1>
        <div className="space-y-4">
          <div className="bg-silver p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Your Bookings</h2>
            <p>✔ Tesla Model 3 - Confirmed</p>
          </div>
          <div className="bg-silver p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Upcoming Test Drives</h2>
            <p>📅 Apr 30 - Tesla Model 3, Route B, 11:00 AM</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserDashboard;
  