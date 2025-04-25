import React, { useState } from 'react';
import FormModal from './FormModal';

const ContactForm = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        number: ''
    });

    const [modalData, setModalData] = useState({
        show: false,
        title: '',
        message: ''
    });

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
            setModalData({
                show: true,
                title: "Falta algo",
                message: "Revisa la información."
            });
        } else {
            setModalData({
                show: true,
                title: "¡Todo salió bien!",
                message: "Halua se comunicará pronto."
            });
            // Opcional: resetear campos
            // setFormData({ name: '', email: '', address: '', number: '' });
        }
    };

    return (
        <div className="flex justify-center items-center w-[676px]">
            <form onSubmit={handleSubmit} className="w-full max-w-lg p-8">
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
            <FormModal
                show={modalData.show}
                title={modalData.title}
                message={modalData.message}
                onClose={() => setModalData({ ...modalData, show: false })}
            />
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
        <section className='flex flex-row gap-[75px] justify-center w-full h-max'>
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