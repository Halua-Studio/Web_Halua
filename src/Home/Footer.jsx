import React from 'react';
import footer from '../assets/Footer.png';

const Footer = () => {
  return (
    <footer className="mb-[63px] w-full h-max">
      <div className="flex flex-row justify-between mx-auto gap-auto w-[1245px]">
        <div className="flex flex-row justify-start gap-[21px] w-[120px]">
          <a href="#" className="w-[31px] h-[18.99px] text-gray-700 hover:text-[#18CFED]">
            <i className="w-[31px] h-[18.99px] fab fa-instagram"></i>
          </a>
          <a href="#" className="w-[24.96px] h-[23.73px] text-gray-700 hover:text-[#4C3ACA]">
            <i className="w-[24.96px] h-[23.73px] fab fa-facebook"></i>
          </a>
          <a href="#" className="w-[25px] h-[23.73px] text-gray-700 hover:[#FF9E10]">
            <i className="w-[25px] h-[23.73px] fab fa-behance"></i>
          </a>
          
        </div>

          <p className="text-[12px] text-[#4C4C4C] text-center w-[524px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque illum maiores et dolores similique consequatur eveniet culpa ipsam libero repudiandae, sunt laborum voluptas vel corporis officiis totam suscipit quaerat?</p>       
          
          <img src={footer} alt="Logo de Halua Studio " className="w-[165px] h-[22px]" /> 
          
      </div>
    </footer>
  );
};

export default Footer;