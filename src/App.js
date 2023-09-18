import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/Index";
import DetailPage from "./pages/DetailPage/Index";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
