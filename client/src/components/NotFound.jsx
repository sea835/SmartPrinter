import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-[50px] font-bold">404</h1>
      <p className="text-[20px]">Page Not Found</p>
      <Link to="/home" className="mt-4 text-blue-500">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
