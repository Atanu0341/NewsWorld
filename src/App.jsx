import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App = () => {
  return (
    <>
      <div className="bg-slate-700 w-screen h-full">
        <Navbar />
        <div>
          <News />
        </div>
      </div>
    </>
  );
};

export default App;
