import React, { useState } from "react";
import ModeBtn from "./ModeBtn";
import { Link } from "react-router-dom";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  let [open, setOpen] = useState(false);
  
  return (
    <div className="sticky shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between dark:bg-slate-700 bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] dark:text-white text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="aperture"></ion-icon>
          </span>
          NewsWorld
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer xl:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`xl:flex md:items-center xl:pb-0 pb-12 absolute xl:static bg-white xl:z-auto z-[-1] left-0 w-full xl:w-auto xl:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7 md:p-4 xl:p-0">
            <Link to="/">Home</Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 md:p-4 xl:p-0">
            <Link to="/business">Business</Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 md:p-4 xl:p-0">
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 md:p-4 xl:p-0">
            <Link to="/health">Health</Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 md:p-4 xl:p-0">
            <Link to="/science">Science</Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 md:p-4 xl:p-0">
            <Link to="/sports">Sports</Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 md:p-4 xl:p-0">
            <Link to="/technology">Technology</Link>
          </li>
          <ModeBtn darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
