import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);

  // ✅ moved outside useEffect so we can reuse it
  const fetchEvent = async () => {
    try {
      const { data } = await API.get(`/events/${id}`);
      setEvent(data);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const handleRegister = async () => {
    try {
      setLoading(true);
      await API.post(`/register/${event._id}`);
      alert("Registered Successfully ✅");
      setRegistered(true);
      fetchEvent(); // refresh seat count
    } catch (err) {
      alert(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  if (!event) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded">
      <h2 className="text-3xl font-bold mb-4">{event.name}</h2>
      <p className="text-gray-600 mb-2">{event.location}</p>
      <p className="mb-2">{new Date(event.date).toLocaleString()}</p>
      <p className="mb-4">{event.description}</p>

      <p className="mb-4 font-semibold">
        Available Seats: {event.availableSeats}
      </p>

      {event.availableSeats <= 0 ? (
        <p className="text-red-600 font-bold">Sold Out ❌</p>
      ) : registered ? (
        <p className="text-green-600 font-bold">You are registered ✅</p>
      ) : (
        <button
          onClick={handleRegister}
          disabled={loading}
          className="bg-indigo-600 text-white px-6 py-2 rounded"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      )}
    </div>
  );
};

export default EventDetails;
