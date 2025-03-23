
import React from 'react';

const Section1 = () => {
    return (
      <section className="container mx-auto px-6 py-20 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Columna izquierda */}
          <div>
            <h1 className="text-6xl font-bold text-gray-800">
              WE'RE
            </h1>
            <h1 className="text-6xl font-bold text-purple-800">
              PROFESSIONALS.
            </h1>
            <hr className='mt-2'/>
            <h3 className="text-4xl font-bold text-gray-600 mb-4">
              We're Halua.studio
            </h3>
            <small className="leading-20 text-gray-500">
             Medellin, Col.
            </small>
          </div>
               
  
          {/* Columna derecha */}
          <div>
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
            
        </div>
      </section>
    );
  };

/*
const ImageStack =(props) =>{

    return (
        <div className=''>
            <img src={props.img1} alt={props.altImg1} className='' />
            <img src={props.img2} alt={props.altImg2} className='' />
        </div>
    );
}



const PortfolioCenter =(props) =>{

    return (
        <div className='bg-amber-300'>
            <h2 className='text-red-50 '>{props.titleBlack}</h2>
            <h2 className=''>{props.titleporple}</h2>
            <p className=''>{props.text}</p>

            <img src={props.imgCenter} alt={props.altImgCenter} className='' />
            <button className='bg-red'>{props.button}</button>
        </div>
    );
}




const LittlePortfolioSection =() =>{

    return (
        <section className='flex flex-row'>
            <ImageStack
            img1="img1.png" altImg1="altImg1"
            img2="img2.png" altImg2="altImg2"           
            />
            <PortfolioCenter 
            titleBlack='OUR' titleporple='WORK.' text='Así es Halua.'
            imgCenter="imgCenter.png" altImgCenter="altCenter"
            button='more'
            />
            <ImageStack
            img1="img3.png" altImg1="altImg3"
            img2="img4.png" altImg2="altImg4"           
            />
        </section>
    );


}
*/
export default Section1;
