import React from "react";
import loading from "../assets/loader.svg";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={loading} alt="loading..." className="mix-blend-multiply" />
    </div>
  );
};

export default Spinner;
