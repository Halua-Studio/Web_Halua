import React from "react";

const Card = (props) => {
  return (

    <div className="flex flex-col">
      <div className={`relative w-[21.5625rem] h-[8.875rem]  ${props.BackgroundColor}` }>
        <h2 className="absolute -bottom-2 left-0 text-white font-extrabold text-[37.9px] -ml-1">{props.title}</h2>
      </div>
      <div className="pt-6 bg-white flex-grow w-[21.5625rem] h-[8.875rem]">
        <p className="text-gray-700 font-normal">{props.description}</p>
      </div>
    </div>
  )
}

const CardSection = () => {
  return (
    <section className="container mx-auto my-42 px-4 py-8 w-[88.4375rem] h-[26.5rem]">
      <div className="grid grid-cols-3 gap-30 pl-2">
        <Card
          BackgroundColor="bg-cyan-500"
          title="WEB"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti nisi provident atque, harum rem labore eligendi nulla quasi, laudantium eveniet ipsum nam neque nobis eius est ab magni enim quae!"
        />
        <Card
          BackgroundColor="bg-violet-950"
          title="BRANDING"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti nisi provident atque, harum rem labore eligendi nulla quasi, laudantium eveniet ipsum nam neque nobis eius est ab magni enim quae!"
        />
        <Card
          BackgroundColor="bg-amber-500"
          title="ILUSTRATION"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti nisi provident atque, harum rem labore eligendi nulla quasi, laudantium eveniet ipsum nam neque nobis eius est ab magni enim quae!"
        />
      </div>
    </section>
  )
}

export default CardSection
