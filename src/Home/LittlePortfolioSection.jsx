
import React, {useState} from 'react';
import PopUpnE from './PopUp/PopUpnE';

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
            <div className='w-max self-start' >
                <h2 className="text-[67.34px] leading-12 font-bold text-[#4C4C4C]">{props.titleBlack}</h2>
                <h2 className="text-[67.34px] leading-17 font-bold text-[#4C3ACA]">{props.titleporple}</h2>
                <hr className="w-[345px] h-[2px] bg-[#4C4C4C] mt-4.5"></hr>
                <h3 className="text-[37.9px] leading-10 text-[#4C4C4C] font-extrabold">{props.text}</h3>
            </div>
            <div className='flex flex-col gap-[30px]'>
                <img src={props.imgCenter} alt={props.altImgCenter} className='w-[525px] h-[287px]' />
                <button className='w-[315px] h-[27px] border-b-2 border-[#4c4c4c] border-solid text-[#4c4c4c] font-normal cursor-pointer' onClick={() => props.onButtonClick(props.projectId)}>{props.button}</button>
            </div>

        </div>
    );
}


const LittlePortfolioSection =() =>{

    const [showPopup, setShowPopup] = useState(false);
    const [selectedId, setSelectedId] = useState(null);


    const handleOpenPopup = (projectId) => {
        setSelectedId(projectId);
        setShowPopup(true); // Mostrar el Pop-Up
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setSelectedId(null);      // Cerrar el Pop-Up
    };



    return (
        <section className='flex flex-row justify-center gap-[15px] w-full h-max mb-[200px]'>
            <ImageStack
            img1="/public/img/Rectangle-4.webp" altImg1="ImagenJugador de la seccion"
            img2="\public\img\ImagenAzul.webp" altImg2="altImg2"           
            />
            <PortfolioCenter 
            titleBlack='OUR' titleporple='WORK.' text='Así es Halua.'
            imgCenter="\public\img\big.webp" altImgCenter="altCenter"
            button='more'
            onButtonClick={handleOpenPopup} projectId={1}

            />
            <ImageStack
            img1="\public\img\ImagenRoja.webp" altImg1="altImg3"
            img2="\public\img\ImagenNegra.webp" altImg2="altImg4"           
            />
            {showPopup && selectedId && (
                <PopUpnE selectedId={selectedId} isOpen={showPopup} onClose={handleClosePopup} />
            )}
        </section>
    );


}

export default LittlePortfolioSection;
