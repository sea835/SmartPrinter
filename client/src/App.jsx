import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import PrinterForm from "./components/PrinterForm";

function App() {
  return (
    <>
      <div className="container w-[1400px] mx-auto items-center text-[15px]">
        <Header />
        <main className="h-[700px] bg-gradient-to-b from-white to-blue-300">
          {/* <Outlet /> */}
          <PrinterForm />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
