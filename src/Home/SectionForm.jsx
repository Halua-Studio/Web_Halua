import React, { useState } from 'react';
import PopUpForm from './PopUpForm';

const ContactForm = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        number: ''
    });

    const [popupType, setPopupType] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, address, number } = formData;

        if (!name || !email || !address || !number) {
            setPopupType("error"); // falta llenar datos
        } else {
            setPopupType("success"); 
        }
    };

    return (
        <div className="flex w-[676px]">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="grid gap-4">
                    <label className="block">
                        <input  name="name" value={formData.name} onChange={handleChange} type="text" placeholder={props.name} className="w-full border-b border-gray-700 outline-none p-2" />
                    </label>
                    <label className="block">
                        <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder={props.email} className="w-full border-b border-gray-700 outline-none p-2" />
                    </label>
                    <label className="block">
                        <input  name="address" value={formData.address} onChange={handleChange} type="text" placeholder={props.address} className="w-full border-b border-gray-700 outline-none p-2" />
                    </label>
                    <label className="block">
                        <input name="number" value={formData.number} onChange={handleChange} type="tel" placeholder={props.number} className="w-full border-b border-gray-700 outline-none p-2" />
                    </label>
                </div>
                <div className="flex justify-end mt-6">
                    <button className="w-[315px] border-b border-gray-700 outline-none p-2">{props.button}</button>
                </div>
            </form>
            {/* PopUpForm cuando corresponda */}
            {popupType && (
                <PopUpForm
                    type={popupType}
                    onClose={() => setPopupType(null)}
                />
            )}
        </div>
    );
}



const TitleForm =(props) =>{

    return (
        <div className='flex flex-col w-full h-max gap-[30px] items-start self-start pt-7' >
            <h2 className="text-[67.34px] leading-12 font-bold text-[#4C4C4C]">{props.titleBlack}</h2>
            <h2 className="text-[67.34px] leading-3 font-bold text-[#18CFED]">{props.titleporple}</h2>
            <hr className="absolute left-[-60px] w-[676px] border-1 bg-[#4C4C4C] mt-32"></hr>
            <h3 className="text-[50.52px] leading-16 text-[#4C4C4C] mb-4 font-extrabold">{props.text}</h3>
        </div>
    );
}




const SectionForm =() =>{

    return (
        <section className='relative flex flex-row items-betweend w-full max-w-[77.8125rem] h-full self-center justify-between gap-[75px] mb-[153px]'>
            <TitleForm
            titleBlack='QUE' titleporple='ESPERAS?' text='Trabajemos juntos.'
            imgCenter="imgCenter.png" altImgCenter="altCenter"
            button='more'
            />
            <ContactForm
            name='Name' email='E-mail' address='Address' number='Number' button='Send'
            />
        </section>
    );


}

export default SectionForm;