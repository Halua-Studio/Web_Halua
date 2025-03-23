import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold leading-tight">
              <span className="text-gray-700">CREAMOS</span>
              <br />
              <span className="text-amber-500">CRECEMOS JUNTOS</span>
            </h1>
            <h2 className="text-2xl text-gray-700 mt-4 font-medium">
              Así es Halua
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
