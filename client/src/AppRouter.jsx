import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import PrinterGrid from "./components/PrinterGrid";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/printers" element={<PrinterGrid />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
