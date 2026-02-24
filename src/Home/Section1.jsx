
import React from 'react';

const Section1 = () => {
    return (

        <section className="relative flex flex-col items-center self-center mt-70 mb-[40px] gap-67 min-h-[10vh]">
        <div className=' flex flex-row gap-[30px] items-center'>
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

        <div className="sticky bottom-6 flex justify-between items-center w-full">
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


    );
};
export default Section1;
