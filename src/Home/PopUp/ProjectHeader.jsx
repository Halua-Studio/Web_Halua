const ProjectHeader = ({srcPortada, altPortada, onClose, onNext, onPrev  }) => {
  return (
    <section className="relative w-full h-full pt-[44px] mb-[113px] flex flex-col items-center gap-[12px]">
        <button className="fixed right-86 w-[315px] h-[27px] px-4 border-b-2 border-[#4c4c4c] border-solid text-[#4c4c4c] font-normal text-sm hover:text-purple-500 hover:border-purple-500" onClick={onClose}>Skip</button>
        <img className="w-[1065px] h-[489px] object-cover mt-10 " src={srcPortada} alt={altPortada} />
        <div className="w-[1155px] flex flex-row justify-center">
          <button className="fixed bottom-45 left-86 w-[315px] h-[27px] px-16 text-left border-b-2 border-[#4c4c4c] border-solid text-[#4c4c4c] font-normal  hover:text-blue-500 hover:border-blue-500" onClick={onPrev} >more</button>
          <h3 className="font-normal text-[16px]">Swipe up</h3>
          <button className="fixed bottom-45 right-86 w-[315px] h-[27px] px-16 text-right border-b-2 border-[#4c4c4c] border-solid  text-[#4c4c4c] font-normal  hover:text-yellow-500 hover:border-yellow-500" onClick={onNext} >more</button>
        </div>
    </section>
  )
}

export default ProjectHeader

