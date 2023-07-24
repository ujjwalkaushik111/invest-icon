import React from "react";
import logo2 from "../assets/image/svg/firstlogo.svg"

const Preloader = () => {
  return (
    <div
      id="preloader"
      className="min-vh-100 d-flex align-items-center justify-content-center bg-black position-fixed w-100 top-0 z-3 start-0"
    >
      <div>
        <img src={logo2} alt="#" />
      </div>
    </div>
  );
};

export default Preloader;
