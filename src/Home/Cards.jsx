import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-col h-full">
        <div className={`relative h-32 ${props.BackgroundColor}`}>
            <h2 className="absolute bottom-0 left-0 text-white font-bold text-4xl">{props.title}</h2>
        </div>
        <div className="pt-6 bg-white flex-grow">
            <p className="text-gray-700 ">{props.description}</p>
        </div>
    </div>
  )
}
const CardSection = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-3 gap-13">
        <Card
            BackgroundColor="bg-cyan-500"
            title="Web"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti nisi provident atque, harum rem labore eligendi nulla quasi, laudantium eveniet ipsum nam neque nobis eius est ab magni enim quae!"
        />
        <Card
            BackgroundColor="bg-violet-950"
            title="Branding"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores amet rem"
        />
        <Card
            BackgroundColor="bg-amber-500"
            title="Ilustration"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit asperiores amet rem"
        />
      </div>
    </section>
  )
}

export default CardSection
