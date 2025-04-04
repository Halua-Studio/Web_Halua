import React from 'react';
import logo from '../assets/Halua.png'; // Asegúrate de importar tu logo

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full top-0 z-50">
      {/* Contenedor del logo */}
      <div className="container mx-auto px-6 py-4">
        <img src={logo} alt="Logo de Halua Studio" className="h-5" /> {/* Ajusta el tamaño del logo */}
      </div>
      
        {/* Contenedor de la línea y los puntos */}
      <div className="flex-1 flex items-center">
        {/* Línea marcada debajo del Navbar */}
        <div className="border-b-2 border-gray-800 w-430"></div>
        <div className="flex space-x-2 ml-4">
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
        </div>
    </div>
    </nav>
  );
};



export default Navbar;