import React from 'react';
import logo from '../assets/Halua.png'; // Asegúrate de importar tu logo

const Navbar = () => {
  return (
    <nav className="bg-white w-full top-0 ">
      {/* Contenedor del logo */}
      <div className="w-full mx-[60px] py-5">
        <img src={logo} alt="Logo de Halua Studio" className="w-[75px] h-[19px]" />
      </div>
      
        {/* Contenedor de la línea y los puntos */}
      <div className="flex-1 flex items-center mr-[60px]">
        {/* Línea marcada debajo del Navbar */}
        <div className=" border-b-2 border-[#4C4C4C] w-full"></div>
        <div className="flex space-x-2 ml-4">
            <div className="w-3 h-3 bg-[#CCCCCC] rounded-full"></div>
            <div className="w-3 h-3 bg-[#999999] rounded-full"></div>
            <div className="w-3 h-3 bg-[#4C4C4C] rounded-full"></div>
        </div>
    </div>
    </nav>
  );
};



export default Navbar;