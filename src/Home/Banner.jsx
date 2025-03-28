import React from "react";
import imagen from "../assets/Firewatch2.png";

const Banner = () => {
  return (
    <div classname="w-full">
      <div className="relative max-w-6xl mx-auto h-[500px]">
        <div className="absolute top-0 right-0 w-[65%] h-full">
          <img
            src={imagen}
            alt="imagen"
            className="w-full h-full object-cover grayscale scale-y-90"
          ></img>
        </div>
        <div className="absolute top-0 left-0 z-10 h-full flex flex-col justify-center pt-44">
          <div className="bg-transparent ">
            <h3 className="text-6xl font-bold leading-tight text-gray-600 -mb-4 tracking-wide">
              <span>CREAMOS Y</span>
            </h3>
            <h3 className="text-6xl font-bold leading-tight text-amber-500 whitespace-nowrap tracking-wide">
              <span className="">CRECEMOS JUNTOS.</span>
            </h3>
            <div className="absolute  w-full h-0.5 bg-gray-600"></div>
            <h3 className="text-4xl font-bold leading-tight text-gray-600">
              <span>Así es Halua.</span>
            </h3>
          </div>
        </div>
      </div>
    </div>

    /*
        <div className="w-full border-t border-b border-blue-600">
          <div className="relative max-w-6xl mx-auto h-[300px]">
            {/* Background image }
            <div className="absolute top-0 right-0 w-[65%] h-full">
              <img src={imagen} alt="imagen" className="w-full h-full object-cover contrast-125" />
            </div>
    
            {/* Text content that overlaps with the image }
            <div className="absolute top-0 left-0 z-10 w-[45%] h-full flex flex-col justify-center pl-8">
              <div className="bg-transparent bg-opacity-0 p-6 -mr-20">
                <h1 className="text-4xl font-bold leading-tight">
                  <span className="text-gray-700">CREAMOS Y</span>
                  <br />
                  <span className="text-amber-500">CRECEMOS JUNTOS.</span>
                </h1>
    
                {/* Separator line }
                <div className="w-16 h-0.5 bg-gray-400 my-4"></div>
    
                <h2 className="text-2xl text-gray-700">Así es Halua.</h2>
              </div>
            </div>
          </div>
        </div> 
        */
  );
};

export default Banner;
