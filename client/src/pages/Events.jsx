import { useEffect, useState } from "react";
import API from "../api/axios";
import EventCard from "../components/EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await API.get(
        `/events?search=${search}&category=${category}`,
      );
      setEvents(data);
    };
    fetchEvents();
  }, [search, category]);

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        <input
          className="border p-2 rounded w-full"
          placeholder="Search events..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="Technology">Technology</option>
          <option value="Business">Business</option>
          <option value="Health">Health</option>
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
