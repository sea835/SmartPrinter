import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import PrinterGrid from "./components/PrinterGrid";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import PrinterForm from "./components/PrinterForm";
import AddPrinterForm from "./components/AddPrinterForm";

const AppRouter = () => {
  const userRole = "admin"; // This should be dynamically set based on the logged-in user

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App role={userRole} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/printers" element={<PrinterGrid role={userRole} />} />
          <Route path="/printer/:id" element={<PrinterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/add-printer" element={<AddPrinterForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
