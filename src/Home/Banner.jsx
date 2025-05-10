  import React from "react";
  import imagen from "../assets/gymbro.jpg";

  const Banner = () => {
    return (
      <section className="relative flex flex-row w-max max-w-[77.8125rem] h-full mx-auto justify-between mb-[216px]">
        <div className=" w-[720px] flex flex-col justify-end pt-44 bg-transparent z-10 mb-10">
          <h3 className="text-[67.34px] font-bold leading-5  text-gray-600 " >CREAMOS Y</h3>
          <h3 className="text-[67.34px] font-bold  text-amber-500  whitespace-nowrap">CRECEMOS JUNTOS.</h3>
          <hr className="absolute left-[-60px] bottom-22 w-[766px] border-1 bg-[#4C4C4C] mb-3"/>
          <h3 className="text-[50.52px] font-bold leading-10 text-gray-600 mb-4  ">Así es Halua.</h3>
        </div>
        <img className= "w-[49.6875rem] h-[30rem] object-cover scale-x-105 translate-x-[-220px]" src={imagen} alt="Gymbro"></img>
      </section>



    );
  };





  export default Banner;



<section className="relative w-full max-w-[77.8125rem] h-[30rem] mx-auto flex overflow-hidden">


      {/* Imagen con posición desplazada hacia la izquierda */}
      <div className="absolute right-0 w-[55%] h-full overflow-hidden">
        <img
          src={imagen}
          alt="Gymbro"
          className="w-full h-full object-cover grayscale scale-x-105 translate-x-[-5rem]"
        />
      </div>
    </section>