import { useEffect, useState } from "react";
import API from "../api/axios";

const Dashboard = () => {
  const [registrations, setRegistrations] = useState([]);

  const fetchRegisteredEvents = async () => {
    try {
      const { data } = await API.get("/register/my");
      setRegistrations(data);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchRegisteredEvents();
  }, []);

  const today = new Date();

  const upcoming = registrations.filter((r) => new Date(r.event.date) > today);

  const past = registrations.filter((r) => new Date(r.event.date) <= today);

  const handleCancel = async (eventId) => {
    try {
      await API.delete(`/register/${eventId}`);
      alert("Registration Cancelled ❌");
      fetchRegisteredEvents();
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>

      {upcoming.length === 0 && (
        <p className="text-gray-500">No upcoming events</p>
      )}

      {upcoming.map((r) => (
        <div key={r._id} className="bg-green-100 p-3 rounded mb-2">
          <h3 className="font-semibold">{r.event.name}</h3>
          <p>{new Date(r.event.date).toLocaleDateString()}</p>

          <button
            onClick={() => handleCancel(r.event._id)}
            className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-8 mb-4">Past Events</h2>

      {past.length === 0 && <p className="text-gray-500">No past events</p>}

      {past.map((r) => (
        <div key={r._id} className="bg-gray-200 p-3 rounded mb-2">
          <h3 className="font-semibold">{r.event.name}</h3>
          <p>{new Date(r.event.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
