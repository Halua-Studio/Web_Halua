// FormModal.jsx
import React from 'react';

const FormModal = ({ show, onClose, title, message }) => {
    if (!show) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
                <p className="text-gray-600 text-lg">{message}</p>
                <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default FormModal;
