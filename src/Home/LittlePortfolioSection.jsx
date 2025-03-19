
import React from 'react';

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

export default LittlePortfolioSection;
