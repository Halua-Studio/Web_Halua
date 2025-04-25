import React from "react";
import imagen from "../assets/gymbro.jpg";

const Banner = () => {
  return (
    <div classname="w-[77.8125rem] h-[30rem]">
      <div className="relative max-w-6xl mx-auto h-[500px]">
        <div className="absolute top-0 -right-10 w-[49.6875rem] h-[30rem]">
          <img
            src={imagen}
            alt="Gymbro"
            className="w-full h-full object-cover grayscale scale-x-105"
          ></img>
        </div>
        <div>
          <div className="absolute top-40 -left-11 z-10 w-[54.4375rem] h-[11.6875rem] flex flex-col justify-center pt-44">
            <div className="bg-transparent">
              <h3 className="text-6xl font-bold leading-tight text-gray-600 -mb-4" style={{ letterSpacing: "0.1em" }}>
                <span>CREAMOS Y</span>
              </h3>
              <h3 className="text-6xl font-bold leading-tight text-amber-500 whitespace-nowrap" style={{ letterSpacing: "0.1em" }}>
                <span className="">CRECEMOS JUNTOS.</span>
              </h3>
              <hr className="w-[42rem] border-t-2"/>
              <h3 className="text-5xl font-bold leading-tight text-gray-600">
                <span>Así es Halua.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
