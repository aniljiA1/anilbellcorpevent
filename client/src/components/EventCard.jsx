import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
      <p className="text-gray-600">{event.location}</p>
      <p className="text-sm text-gray-500">
        {new Date(event.date).toLocaleString()}
      </p>
      <Link
        to={`/event/${event._id}`}
        className="mt-3 inline-block bg-indigo-600 text-white px-4 py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
};

export default EventCard;
