
import React from 'react';

const Section1 = () => {
    return (



      <section className="relative flex flex-col items-center w-max max-w-[77.8125rem] h-full self-center justify-between mt-70 mb-30 gap-67">
      <div className=' flex flex-row w-full h-max gap-[30px] items-center'>
          <div className='w-[785px] self-center' >
              <h2 className="text-[89.79px] w-full h-max leading-20 font-bold text-[#4C4C4C]">WE'RE</h2>
              <h2 className="text-[89.79px] w-full h-max leading-21 font-bold text-[#4C3ACA]">PROFESSIONALS.</h2>
              <hr className="absolute left-[-60px] w-[780px] h-[2px] bg-[#4C4C4C]"></hr>
              <h1 className="text-4xl font-bold leading-10 text-[#4C4C4C] mb-4">We're Halua.studio </h1>
          </div>

          <div className='w-[438px] self-start pt-4'>
              <p className="text-[16px] w-[438px] h-max text-[#4C4C4C] leading-5">
              Convierte tu idea en una marca poderosa. Nosotros te ayudamos a construirla desde cero.
              </p>
              <p className=" text-[16px] w-[438px] h-max mt-5 text-gray-500 leading-5">
              Diseño, estrategia y desarrollo web para emprendedores que quieren destacar. ¿Listo para dar el siguiente paso?
              </p>
              <p className="text-[16px] w-[438px] h-max mt-5 text-gray-400 leading-5">
              Tu marca merece más que solo presencia, merece impacto. Creamos experiencias digitales que convierten.
              </p> 
          </div>
      </div>
      
      <div className="w-full m-auto h-full relative flex flex-row justify-between items-center">
          <small className=" text-[16px] text-[#4C4C4C] flex">
              Medellin, Col.
          </small>


          <div className="grid grid-cols-3 p-2 bottom-0 right-0 gap-x-1.5 gap-y-2 self-center">
              <div className="w-[20.83px] h-[20.83px] bg-[#4C3ACA] rounded-full"></div>
              <div className="w-[20.83px] h-[20.83px] bg-[#FF9E10] rounded-full"></div>
              <div className="w-[20.83px] h-[20.83px] bg-[#18CFED] rounded-full"></div>
              <span></span>
              <div className="w-[20.74px] h-[20.74px] bg-[#4C4C4C]"></div>
          </div>
      </div>
  </section>





/*
      <section className="mt-[223px] w-full h-max flex flex-row gap-[30px] items-center justify-between">
          <div className='relative w-[785px] h-full'>
            <div className='w-[785px]'>
              <h2 className="text-[89.79px] leading-16 font-bold text-gray-800">
                WE'RE
              </h2>
              <h2 className="text-[89.79px] leading-22 font-bold text-purple-800">
                PROFESSIONALS.
              </h2>
            </div>
            <div className="absolute top-[167px] left-[-60px] w-[785px] h-[2px] bg-gray-400"></div>
            <h1 className="text-4xl font-bold text-gray-600 mb-4">
              We're Halua.studio 
            </h1>
            <small className="absolute bottom-0 left-0 text-gray-500 ml-6">
              Medellin, Col.
            </small>
          </div>
          
          <div className='w-[438px] '>
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
                
                <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>

                
                <div className="grid grid-cols-3 p-2">
                    <div></div>
                    <div className="w-6 h-6 bg-gray-400"></div>
                    <div></div>
                </div>
            </div>
          </div>

      </section>

*/

    );
  };
export default Section1;
