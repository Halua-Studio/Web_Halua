import React from 'react';

const PopUpForm = ({ type, onClose}) => {

    const isSuccess = type === "success";

    return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
        <div className='relative bg-white justify-start flex flex-col w-[700px] h-[281px]' >  
                <h2 className="text-[50.58px] font-bold leading-22  text-[#4C4C4C] ml-[30px] mt[30px]">{isSuccess ? "Espera nuestro" : "Espera, hace falta" }</h2>
                <h2 className={`text-[50.58px] font-bold ml-[30px] leading-2 ${isSuccess ? "text-[#18CFED]" : "text-[#4C3ACA]"} ml-7`}>{isSuccess ?  "llamado." : "algo importante."}</h2>
                <hr className="absolute w-[587px] border-1 border-[#4C4C4C] mt-32 left-0"></hr>
                <h2 className="text-[37.9px] font-bold ml-7 leading-9 text-[#4C4C4C] mb-2 mt-10">{isSuccess ? "Iniciaste una nueva historia." : "Revisa la información." }</h2>
                <p className={`text-[16px] h-max text-start ml-7 ${isSuccess ? "text-[#4C4C4C] w-[545px]" : "text-red-600 w-[622px]"}`}>{isSuccess ? "Lo mas pronto recibiras un llamado de Halua.Studio para trabajar juntos y volver tus ideas realidades." : "Recuerda que los espacios marcados con (*) son obligatorios, tu información está a salvo con nosotros."}</p>
                <button onClick={onClose} className="w-[315px] border-b border-[#4C4C4C] outline-none self-end pb-2  right-0 text-right pr-10">Skip</button>     
        </div>
    </div>

    )
};

export default PopUpForm;
