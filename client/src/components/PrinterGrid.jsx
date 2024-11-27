import React, { useEffect, useState } from "react";
import PrinterCard from "./PriterCard";
import { Link } from "react-router-dom";

const PrinterGrid = ({ role }) => {
  const [printers, setPrinters] = useState([]);

  useEffect(() => {
    // Simulate a fetch call
    const fetchPrinters = async () => {
      const data = [
        { id: 1, name: "HP", price: 200, image: "printer1.jpg" },
        { id: 2, name: "Canon", price: 250, image: "printer2.jpg" },
        { id: 3, name: "Epson", price: 300, image: "printer3.jpg" },
        { id: 4, name: "Brother", price: 350, image: "printer4.jpg" },
      ];
      setPrinters(data);
    };

    fetchPrinters();
  }, []);

  return (
    <div className="w-full px-10 pt-20">
      {role === "admin" && (
        <div className="mb-4">
          <Link
            to="/add-printer"
            className="bg-[#f05258] text-white px-4 py-2 rounded-full"
          >
            Add Printer
          </Link>
        </div>
      )}
      <div className="grid grid-cols-4 gap-2">
        {printers.map((printer, index) => (
          <PrinterCard key={index} printer={printer} userRole={role} />
        ))}
      </div>
    </div>
  );
};

export default PrinterGrid;
