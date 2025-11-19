import React from 'react'
import Navbar from '../components/Navbar'
import restaurant from '../assets/restaurant.jpg'
import { useNavigate } from "react-router-dom";

const Reservetable = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const number = e.target.name.value;
        const date = e.target.date.value;
        const time = e.target.time.value;

        navigate("/details", {
            state: { number, date, time }
        });
    };

    return (
        <div className="w-full font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="w-full h-[500px] md:h-[500px]">
                <img
                    src={restaurant}
                    alt="Food"
                    className="w-full h-full object-cover"
                />
            </section>

            {/* Reservation Form */}
            <section className="px-10 py-14 text-center">
                <h2 className="text-2xl font-bold mb-4">Reserve your table now</h2>
                <p className="mb-6">Please, select the number of diners and the date and time for the reservation.</p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 mx-auto w-full max-w-sm"
                >
                    <input
                        type="text"
                        name="number"
                        placeholder="Number of Diners"
                        required
                        className="border p-2 rounded w-full"
                    />

                    <input
                        type="date"
                        name="date"
                        required
                        className="border p-2 rounded w-full"
                    />

                    <input
                        type="time"
                        name="time"
                        required
                        className="border p-2 rounded w-full"
                    />

                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-5 rounded"
                    >
                        Continue
                    </button>
                </form>
            </section>

        </div>
    );
}

export default Reservetable;
