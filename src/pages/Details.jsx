import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { number, date, time } = location.state || {};

  return (
    <div className="w-full font-sans">

      {/* Navbar */}
      <Navbar />

      {/* Details Section */}
      <section className="px-10 py-14 max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-bold mb-8">Details</h2>

        {/* Reservation Info */}
        <div className="space-y-4 text-lg">
          <p><span className="font-semibold">Name:</span> {number}</p>
          <p><span className="font-semibold">Date:</span> {date}</p>
          <p><span className="font-semibold">Time:</span> {time}</p>
        </div>

        {/* Reserve Button */}
        <button onClick={() => navigate("/")}
         className="mt-10 px-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition">
          Reserve Now
        </button>
      </section>
    </div>
  );
};

export default Details;
