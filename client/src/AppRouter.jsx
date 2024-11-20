import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import PrinterCard from "./components/PriterCard";

const AppRouter = () => {
  const printer = {
    name: "HP",
    price: 200,
    image: "printer.jpg",
  };
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route path="/printers" element={<PrinterCard printer={printer} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
