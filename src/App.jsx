import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Bookingpage from "./pages/Bookingpage";
import Reservetable from "./pages/Reservetable";
import Details from "./pages/Details";

const App = () => {
   return (
    <BrowserRouter>
      <Routes>

        {/* Default Route → Booking Page */}
        <Route path="/" element={<Bookingpage />} />

        {/* Reservation Page */}
        <Route path="/reserve-table" element={<Reservetable />} />

        {/* Details Page */}
        <Route path="/details" element={<Details />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App