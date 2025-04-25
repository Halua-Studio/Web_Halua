const ProjectDescription = ({ nombre, trabajo, logoSrc, descripcion }) => {
  return (
    <section className="flex justify-between items-start mb-8">
      <div className="w-[704px] h-[292px]">
        <div className="w-[524px] h-[93px]">
          <h2 className="text-4xl font-bold text-gray-800 border-b border-gray-150">{nombre}</h2>
          <h3 className="text-xl font-medium text-indigo-600 pb-3">{trabajo}</h3>
        </div>


        <div className="mb-8 w-[615px] h-[167px]">
            <p className="text-gray-700 mb-4 text-sm">{descripcion}</p>
        </div>
      </div>
      <div className="w-[435px] h-[300px]">
        <img src={logoSrc} alt={nombre} className="w-full h-full" />
      </div>
    </section>
  )
}

export default ProjectDescription