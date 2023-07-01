import React from "react";
import { RootLayout } from "./RootLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Milk } from "./components/products/discription/milk/Milk";
export const LayoutRoutes = () => {
  return (
    <>
      <Router>
        <nav>{/* NAVBAR AREA */}</nav>
        <Routes>
          <Route path="/" element={<RootLayout />} />
          <Route path="/milk" element={<Milk />} />
        </Routes>
      </Router>
    </>
  );
};
