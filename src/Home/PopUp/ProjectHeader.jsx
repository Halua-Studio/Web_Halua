const ProjectHeader = ({srcPortada, altPortada, onClose, onNext, onPrev  }) => {
  return (
    <section className="relative h-[600px] flex flex-col items-center p-4 gap-3.5">
        <button className="fixed  self-end w-[315px] h-[27px] text-right border-b-2 border-[#4c4c4c] border-solid text-[#4c4c4c] font-normal" onClick={onClose}>skip</button>
        <img className="w-[1065px] h-[489px] " src={srcPortada} alt={altPortada} />
        <div className="w-[1155px] flex flex-row justify-between gap">
          <button className=" w-[315px] h-[27px] text-left border-b-2 border-[#4c4c4c] border-solid text-[#4c4c4c] font-normal" onClick={onPrev} >Previous</button>
          <h3 className="font-normal text-[16px]">Swipe up</h3>
          <button className=" w-[315px] h-[27px] text-right border-b-2 border-[#4c4c4c] border-solid text-[#4c4c4c] font-normal" onClick={onNext} >Next</button>
        </div>
    </section>
  )
}

export default ProjectHeader

