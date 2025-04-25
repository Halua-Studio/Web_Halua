import React from "react";
import imagen from "../assets/gymbro.jpg";

const Banner = () => {
  return (
    <div className="relative max-w-6xl mx-auto h-[480px] w-full">
      <div className="absolute top-0 right-0 w-[65%] h-full">
        <img
          src={imagen}
          alt="imagen"
          className="w-full h-full object-cover grayscale  scale-x-[1.146]"
        ></img>
      </div>

      <div className="absolute top-0 -left-11 z-10 h-full flex flex-col justify-center pt-44 bg-transparent">
          <h3 className="text-6xl font-bold leading-tight text-gray-600 -mb-4 tracking-wide">
            <span>CREAMOS Y</span>
          </h3>
          <h3 className="text-6xl font-bold leading-tight text-amber-500 whitespace-nowrap tracking-wide">
            <span className="">CRECEMOS JUNTOS.</span>
          </h3>
          <hr/>
          <h3 className="text-4xl font-bold leading-tight text-gray-600">
            <span>Así es Halua.</span>
          </h3>
        </div>
    </div>
  );
};

export default Banner;
