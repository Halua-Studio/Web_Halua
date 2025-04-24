import React from 'react';

const Contenedor = (props) => {
    return (
    <div className='relative p-6 bg-white w-[1050px] h-[300px]'>
        <div className='bg-white p-3 mx-4 border-b-3 border-gray-800 w-230'>  
            <h2 className="text-6xl font-bold text-gray-800 ml-7">{props.title1}</h2>
            <h2 className={`text-6xl font-bold ${props.Color} ml-7`}>{props.title2}</h2>
        </div>
        <div className='bg-white p-3 mx-4'>
            <h2 className="text-6xl font-bold text-gray-800 mb-2 ml-7">{props.subtitle}</h2>
            <p className={`text-2xl ${props.ColorP} mb-6 ml-7`}>{props.paragraph}</p>
            <button className="w-[355px] border-b border-gray-700 outline-none p-2 absolute top-85 right-0 text-right pr-10">
                Skip
            </button>
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
            Color="text-purple-800"
            paragraph="Recuerda que los espacios marcados con (*) son obligatorios, tu información está a salvo con nosotros."
            ColorP="text-red-600"
        />
    </section>
    );
};

const Llenado = () => {
    return (
        <section className="container mx-auto my-42 px-4 py-8">
        <Contenedor
            title1="Espera nuestro"
            title2="llamado."
            subtitle="Iniciaste una nueva historia."
            Color="text-cyan-500"
            paragraph="Lo mas pronto recibiras un llamado de Halua.Studio para trabajar juntos y volver tus ideas realidades."
            ColorP="text-gray-600"
        />
    </section>
    );
};

export { Nollenado, Llenado};