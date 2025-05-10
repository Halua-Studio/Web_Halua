import ProjectHeader from "./ProjectHeader"
import ProjectDescription from "./ProjectDescription"
import ProjectImage from "./ProjectImage"

import { useEffect, useState } from "react";

const PopupnE = ({ selectedId, onClose }) => {
    const [projectData, setProjectData] = useState(null);
    const [allProjects, setAllProjects] = useState([]);
    const [currentId, setCurrentId] = useState(selectedId);
  
    // Cargar todos los proyectos UNA VEZ
    useEffect(() => {
      fetch("/Projects.json")
        .then((res) => res.json())
        .then((data) => {
          setAllProjects(data);
        });
    }, []);
  
    // Cada vez que currentId cambie, actualizamos el proyecto a mostrar
    useEffect(() => {
      if (allProjects.length > 0) {
        const found = allProjects.find((item) => item.id === currentId);
        setProjectData(found);
      }
    }, [currentId, allProjects]);
  
    // Navegación anterior / siguiente
    const handleNavigate = (direction) => {
      const currentIndex = allProjects.findIndex((p) => p.id === currentId);

      let nextIndex;

      if (direction === "next") {
        nextIndex = (currentIndex + 1) % allProjects.length; // vuelve al primero si pasa del último
      } else {
        nextIndex = (currentIndex - 1 + allProjects.length) % allProjects.length; // va al último si baja del primero
      }

      const nextProject = allProjects[nextIndex];
      setCurrentId(nextProject.id);
    };


      // Función para cerrar si se clickea el fondo
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
        onClose();
        }
    };

    if (!projectData) return null;


    return (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={handleBackdropClick}>
            <div className="absolute overflow-y-auto flex flex-col jus items-center bg-white w-[77.81rem] h-[655px] shadow-lg">
                <ProjectHeader
                srcPortada={projectData.ImagenPortada}
                altPortada={projectData.altPortada}
                onClose={onClose}
                onPrev={() => handleNavigate("prev")}
                onNext={() => handleNavigate("next")}
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