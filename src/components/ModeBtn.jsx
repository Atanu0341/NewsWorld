import React from "react";

const ModeBtn = ({ darkTheme, setDarkTheme }) => {
  
  return (
    <button onClick={() => setDarkTheme(!darkTheme)} className="bg-indigo-600  text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500">
      {darkTheme ? "💡" : "🌙"}
    </button>
  );
};

export default ModeBtn;
