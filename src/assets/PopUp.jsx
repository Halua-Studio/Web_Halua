import ProjectHeader from "./ProjectHeader"
import ProjectDescription from "./ProjectDescription"
import ProjectImage from "./ProjectImage"

import { useEffect, useState } from "react";

const PopupnE = ({selectedId, onClose}) => {


    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        fetch("/Projects.json")
        .then((res) => res.json())
        .then((data) => {
            const proyecto = data.find((item) => item.id === selectedId);
            setProjectData(proyecto);
        });
    }, [selectedId]);

    if (!projectData) return null;


      // Función para cerrar si se clickea el fondo
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
        onClose();
        }
    };
    return (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={handleBackdropClick}>
            <div className="absolute overflow-y-auto bg-white w-[77.81rem] h-[655px] p-8 shadow-lg">
                <ProjectHeader
                srcPortada={projectData.ImagenPortada}
                altPortada={projectData.altPortada}
                onClose={onClose}
                />
                <ProjectDescription
                nombre={projectData.Nombre}
                trabajo={projectData.Trabajo}
                logoSrc={projectData.logo}
                descripcion={projectData.Descripcion}
                />
                <ProjectImage
                src1={projectData.ImagenCollage1}
                alt1={projectData.AltImagenCollage1}
                src2={projectData.ImagenCollage2}
                alt2={projectData.AltImagenCollage2}
                src3={projectData.ImagenCollage3}
                alt3={projectData.AltImagenCollage3}
                src4={projectData.ImagenCollage4}
                alt4={projectData.AltImagenCollage4}
                />
            </div>
        </div>

    );
};

export default PopupnE;