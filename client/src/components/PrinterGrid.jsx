import React, { useEffect, useState } from "react";
import PrinterCard from "./PriterCard";

const PrinterGrid = () => {
  const [printers, setPrinters] = useState([]);

  useEffect(() => {
    // Simulate a fetch call
    const fetchPrinters = async () => {
      const data = [
        { name: "HP", price: 200, image: "printer1.jpg" },
        { name: "Canon", price: 250, image: "printer2.jpg" },
        { name: "Epson", price: 300, image: "printer3.jpg" },
        { name: "Brother", price: 350, image: "printer4.jpg" },
      ];
      setPrinters(data);
    };

    fetchPrinters();
  }, []);

  return (
    <div className="w-full px-10 pt-20 grid grid-cols-4 gap-2">
      {printers.map((printer, index) => (
        <PrinterCard key={index} printer={printer} />
      ))}
    </div>
  );
};

export default PrinterGrid;
