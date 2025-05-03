
import React from 'react';

const Section1 = () => {
    return (
      <section className="mt-[223px] w-full h-max flex flex-row gap-[30px] items-center justify-center">
          <div className='w-[856px] h-max'>
            <h2 className="text-[89.79px] leading-16 font-bold text-gray-800">
              WE'RE
            </h2>
            <h2 className="text-[89.79px] leading-22 font-bold text-purple-800">
              PROFESSIONALS.
            </h2>
            <div className="absolute w-[524px] border-b-2 border-[#4C4C4C] left-0"></div>
            <h1 className="text-4xl font-bold text-gray-600 mb-4">
              We're Halua.studio
            </h1>
            <small className="leading-20 text-gray-500 top-0 ">
              Medellin, Col.
            </small>
          </div>
          
          <div className='w-[438px]'>
            <p className="text-gray-700 leading-relaxed">
            Convierte tu idea en una marca poderosa. Nosotros te ayudamos a construirla desde cero.
            </p>
            <p className="mt-5 text-gray-500 leading-relaxed">
            Diseño, estrategia y desarrollo web para emprendedores que quieren destacar. ¿Listo para dar el siguiente paso?
            </p>
            <p className="mt-5 text-gray-400 leading-relaxed">
            Tu marca merece más que solo presencia, merece impacto. Creamos experiencias digitales que convierten.
            </p> 
            <div className="flex flex-col items-end mt-20">
                {/* Contenedor de los círculos (Flexbox) */}
                <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>

                {/* Cuadrado gris (Grid) */}
                <div className="grid grid-cols-3 p-2">
                    <div></div>
                    <div className="w-6 h-6 bg-gray-400"></div>
                    <div></div>
                </div>
            </div>
          </div>

      </section>
    );
  };
export default Section1;
