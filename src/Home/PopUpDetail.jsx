const PopUpDetail = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
                <button className="absolute top-2 right-4 text-gray-700 text-2xl" onClick={onClose}>×</button>
                <h2 className="text-2xl font-bold text-gray-800">Detalles del Proyecto</h2>
                <p className="text-gray-600 mt-2">Aquí iría toda la información detallada sobre el trabajo realizado.</p>
            </div>
        </div>
    );
};

export default PopUpDetail;