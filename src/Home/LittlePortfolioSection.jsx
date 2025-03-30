
import React from 'react';

const ImageStack =(props) =>{

    return (
        <div className='flex flex-col gap-5'>
            <img src={props.img1} alt={props.altImg1} className='w-[345px] h-[287]' />
            <img src={props.img2} alt={props.altImg2} className='w-[345px] h-[287]' />
        </div>
    );
}




const PortfolioCenter =(props) =>{

    return (
        <div className='flex flex-col gap-10'>
            <div>
            <h2 className='text-[67.34px] font-extrabold pb-0 mb-0'>
                <span className="text-[#4c4c4c] block">{props.titleBlack}{" "}</span>
                <span className="text-[#4C3ACA] block">{props.titleporple}{" "}</span></h2>
                <h4 className='text-[#4c4c4c] text-[37.9px] w-[345px] font-extrabold border-t-2 border-[#4c4c4c]'>{props.text}</h4>
            </div>
            <div className='flex flex-col gap-[30px]'>
                <img src={props.imgCenter} alt={props.altImgCenter} className='w-[525px] h-[287px]' />
                <button className='w-[315px] h-[27px] border-b-2 border-[#4c4c4c] border-solid text-[#4c4c4c] font-normal '>{props.button}</button>
            </div>

        </div>
    );
}




const LittlePortfolioSection =() =>{

    return (
        <section className='flex flex-row justify-center gap-[15px] '>
            <ImageStack
            img1="\public\img\Rectangle-4.webp" altImg1="ImagenJugador de la seccion"
            img2="\public\img\ImagenAzul.webp" altImg2="altImg2"           
            />
            <PortfolioCenter 
            titleBlack='OUR' titleporple='WORK.' text='Así es Halua.'
            imgCenter="\public\img\big.webp" altImgCenter="altCenter"
            button='more'
            buton='hola'
            />
            <ImageStack
            img1="\public\img\ImagenRoja.webp" altImg1="altImg3"
            img2="\public\img\ImagenNegra.webp" altImg2="altImg4"           
            />
        </section>
    );


}

export default LittlePortfolioSection;
