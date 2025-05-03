const ProjectImage = ({ src1, alt1, src2, alt2, src3, alt3, src4, alt4}) => {
    return (
    <section className="grid grid-cols-2 w-[1065px] gap-4 mb-4" >
        <img className="w-[525px] h-[395px] " src={src1} alt={alt1} />
        <img className="w-[525px] h-[395px]" src={src2} alt={alt2} />
        <img className="col-span-2 w-[1065px] h-[582px]" src={src3} alt={alt3} />
        <img className="col-span-2 w-[1065px] h-[582px]" src={src4} alt={alt4} />
    </section>
    )
}

export default ProjectImage
