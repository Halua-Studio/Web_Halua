import React from 'react';
import footer from '../assets/Footer.png';

const Footer = () => {
  return (
    <footer className="py-8 w-full h-max">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-700 hover:text-purple-500">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            <i className="fab fa-behance"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            <i className="fab fa-instagram"></i>
          </a>

          <p className="whitespace-normal text-gray-400 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque illum maiores et dolores similique consequatur eveniet culpa ipsam libero repudiandae, sunt laborum voluptas vel corporis officiis totam suscipit quaerat?</p>       
          
          <img src={footer} alt="Logo de Halua Studio" className="h-5" /> 
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;