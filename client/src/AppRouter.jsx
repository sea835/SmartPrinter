import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
