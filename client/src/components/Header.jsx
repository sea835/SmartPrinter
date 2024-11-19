import * as React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const blue = "#1f89db";
  const red = "#f05258";

  return (
    <header className="bg-[#1f89db] w-full h-[60px] flex flex-row text-[18px] text-white font-semibold">
      <h1 className="text-[30px] font-extrabold pt-2 text-black w-2/12 pl-8">
        LSP
      </h1>
      <ul className="flex flex-row gap-16 items-center w-9/12">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">View Printers</Link>
        </li>
        <li>
          <Link to="/about">Buy Pages</Link>
        </li>
      </ul>

      <div className="flex justify-end gap-16 items-center">
        <button>Sign In</button>
      </div>
    </header>
  );
};

export default Header;
