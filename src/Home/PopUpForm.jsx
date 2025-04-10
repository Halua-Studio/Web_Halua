import React from 'react';

const Contenedor = ({ title1, title2, subtitle, paragraph }) => {
    return (
    <div className='relative p-6 bg-white w-[780px] h-[300px]'>
        <div className='bg-white p-3 mx-4 border-b-2 border-gray-800 w-140'>  
            <h2 className="text-5xl font-bold text-gray-800">{title1}</h2>
            <h2 className="text-5xl font-bold text-purple-800">{title2}</h2>
        </div>
        <div className='bg-white p-3 mx-4'>
            <h2 className="text-5xl font-bold text-gray-800 mb-2">{subtitle}</h2>
            <p className="text-gray-600 mb-6">{paragraph}</p>
            <button className="w-[315px] border-b border-gray-700 outline-none p-2 absolute top-60 right-0">Skip</button>
        </div>     
    </div>
    )
}

const Nollenado = () => {
    return (
    <section className="container mx-auto my-42 px-4 py-8">
        <Contenedor
            title1="Espera, hace falta"
            title2="algo importante."
            subtitle="Revisa la información."
            paragraph="Recuerda que los espacios marcados con (*) son obligatorios, tu información está a salvo con nosotros."
        />
    </section>
    )
}


export default Nollenado;