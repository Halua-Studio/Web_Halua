import React from 'react';

const ContactForm =(props) =>{

    return (
        <div className="flex justify-center items-center w-[676px]">
            <form className="w-full max-w-lg p-8">
                <div className="grid gap-4">
                    <label className="block">
                        <input type="text" placeholder={props.name} className="w-full border-b border-gray-700 outline-none p-2" />
                    </label>
                    <label className="block">
                        <input type="email" placeholder={props.email} className="w-full border-b border-gray-700 outline-none p-2" />
                    </label>
                    <label className="block">
                        <input type="text" placeholder={props.address} className="w-full border-b border-gray-700 outline-none p-2" />
                    </label>
                    <label className="block">
                        <input type="tel" placeholder={props.number} className="w-full border-b border-gray-700 outline-none p-2" />
                    </label>
                </div>
                <div className="flex justify-end mt-6">
                    <button className="w-[315px] border-b border-gray-700 outline-none p-2">{props.button}</button>
                </div>
            </form>
        </div>
    );
}



const TitleForm =(props) =>{

    return (
        <div>
        <h2 className='text-[67.34px] font-extrabold pb-0 mb-0 w-[676px]'>
            <span className="text-[#4c4c4c] block">{props.titleBlack}{" "}</span>
            <span className="text-[#18CFED] block">{props.titleporple}{" "}</span></h2>
            <h4 className='text-[#4c4c4c] text-[50.52px] font-extrabold border-t-2 border-[#4c4c4c]'>{props.text}</h4>
        </div>
    );
}




const SectionForm =() =>{

    return (
        <section className='flex flex-row gap-[75px] justify-center'>
            <TitleForm
            titleBlack='QUE' titleporple='ESPERAS?' text='Trabajemos juntos.'
            imgCenter="imgCenter.png" altImgCenter="altCenter"
            button='more'
            />
            <ContactForm
            name='Name' email='E-mail' address='Address' number='Number' button='Enviar'
            />
        </section>
    );


}

export default SectionForm;