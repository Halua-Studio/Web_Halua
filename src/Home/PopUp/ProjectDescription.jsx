const ProjectDescription = ({ nombre, trabajo, logoSrc, descripcion }) => {
  return (
    <section className="flex flex-row justify-between items-center w-full h-[300px] mb-[67px] px-[89.5px] ">
      <div className=" w-[600px] h-[300px]">
          <h2 className="text-[50.24px] font-bold text-[#4C4C4C] leading-16 w-[500px]">{nombre}</h2>
          <hr className="absolute w-[524px] border-1 border-[#4C4C4C] left-0"></hr>
          <h3 className="text-[37.9px] font-medium text-[#4C3ACA] pb-3 w-[500px]">{trabajo}</h3>
          <p className="text-gray-700 mb-4 text-sm w-[567px] h-[167px] whitespace-pre-line ">{descripcion}</p>
      </div>
      <div className="w-[435px] h-[300px]">
        <img src={logoSrc} alt={nombre} className="w-full h-full" />
      </div>
    </section>
  )
}

export default ProjectDescription