import React from "react";

const Card = (props) => {
  return (

    <div className="flex flex-col">
      <div className={`relative w-[21.5625rem] h-[8.875rem]  ${props.BackgroundColor}` }>
        <h2 className="absolute -bottom-2 left-0 text-white font-extrabold text-[37.9px] -ml-1">{props.title}</h2>
      </div>
      <div className="pt-[26px] bg-white flex-grow w-[21.5625rem] h-max">
        <p className="text-[#4C4C4C] font-normal">{props.description}</p>
      </div>
    </div>
  )
}

const CardSection = () => {
  return (
    <section className="items-center w-max max-w-[77.8125rem] h-full self-center mb-[200px]">
      <div className="flex flex-row justify-between gap-[105px]">
        <Card
          BackgroundColor="bg-[#18CFED]"
          title="WEB"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti nisi provident atque, harum rem labore eligendi nulla quasi, laudantium eveniet ipsum nam neque nobis eius est ab magni enim quae!"
        />
        <Card
          BackgroundColor="bg-[#4C3ACA]"
          title="BRANDING"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti nisi provident atque, harum rem labore eligendi nulla quasi, laudantium eveniet ipsum nam neque nobis eius est ab magni enim quae!"
        />
        <Card
          BackgroundColor="bg-[#FF9E10]"
          title="ILUSTRATION"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti nisi provident atque, harum rem labore eligendi nulla quasi, laudantium eveniet ipsum nam neque nobis eius est ab magni enim quae!"
        />
      </div>
    </section>
  )
}

export default CardSection
