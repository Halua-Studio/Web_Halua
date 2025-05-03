import React from 'react';

const PopUpForm = ({ type, onClose}) => {

    const isSuccess = type === "success";

    return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
        <div className='relative p-6 bg-white w-[1050px] h-max'>
            <div className='bg-white p-3 mx-4 border-b-3 border-gray-800 w-230'>  
                <h2 className="text-6xl font-bold text-gray-800 ml-7">{isSuccess ? "Espera nuestro" : "Espera, hace falta" }</h2>
                <h2 className={`text-6xl font-bold ${isSuccess ? "text-purple-800" : "text-cyan-500"} ml-7`}>{isSuccess ?  "llamado." : "algo importante."}</h2>
            </div>
            <div className='bg-white p-3s mx-4 flex flex-col'>
                <h2 className="text-6xl font-bold text-gray-800 mb-2 ml-7">{isSuccess ? "Iniciaste una nueva historia." : "Revisa la información." }</h2>
                <p className={`text-2xl ${isSuccess ? "text-gray-600" : "text-red-600"} mb-6 ml-7`}>{isSuccess ? "Lo mas pronto recibiras un llamado de Halua.Studio para trabajar juntos y volver tus ideas realidades." : "Recuerda que los espacios marcados con (*) son obligatorios, tu información está a salvo con nosotros."}</p>
                <button onClick={onClose} className="w-[355px] border-b border-gray-700 outline-none self-end p-2 top-85 right-0 text-right pr-10">Skip</button>
            </div>     
        </div>
    </div>

    )
}

export default PopUpForm;
