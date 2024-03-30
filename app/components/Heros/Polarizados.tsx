"use client"
import React, { useState } from "react";
import Imagenes from "../ui/Image";
import Chips from "../ui/Chips";
import Videos from "../cards/videos";
import ObrasTipo from "../cards/Obras-colocacion";
import MarcasBranding from "../cards/MarcasBranding";
import { RevealWrapper } from 'next-reveal'
import Materiales from "./Materiales";

export function Polarizado() {

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const generateWhatsappLink = (): string => {
    const phoneNumber: string = '541170450396'; // Reemplaza con el número de WhatsApp
    const encodedMessage: string = encodeURIComponent(message);
    const whatsappLink: string = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    return whatsappLink;
  };

  return (
    <>
      <section id="polarizados" className="gap-4 flex-col m-auto text-white items-center justify-center flex bg-[#020617]">
        <RevealWrapper reset={false} delay={300} distance="50px" duration={1000} easing='cubic-bezier(0.5, 0, 0, 1)' origin="bottom" >
          <div id="vehicular" className="flex mt-[100px] w-full flex-col items-center justify-center text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-cyan-400 bg-opacity-50">Polarizado Vehicular</h1>
          </div>
          <div className="gap-10 flex flex-col">
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              Experimenta la diferencia con nuestra gama de polarizados diseñados para brindar claridad visual, resistencia a arañazos y una apariencia sofisticada.
            </p>
            <RevealWrapper delay={400} distance="50px" duration={1000} easing='cubic-bezier(0.5, 0, 0, 1)' origin="left" reset={true} >
              <Imagenes />
            </RevealWrapper>
          </div>
          <div className="flex items-center justify-center mt-10">
            <Chips />
          </div>
          <div className="flex mt-[100px] w-full flex-col items-center justify-center text-center">
            <h1 id="obras" className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-cyan-400 bg-opacity-50">Polarizado en Obras</h1>
          </div>
          <div className="gap-10 flex flex-col">
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              Ventas por mayor y menor de films materiales
              Ofrecemos una gama diversa de films materiales que no solo cumplen con los estándares más exigentes, sino que también añaden un toque distintivo a tu proyecto.
            </p>
            <Videos />
            <div>
              <ObrasTipo />
            </div>
            <MarcasBranding />
          </div>
          <div className="flex flex-col items-center justify-center mx-auto">
            <h4 className="text-4xl pt-14">Nuestros <span className="font-bold text-yellow-200 uppercase underline">materiales</span></h4>
          </div>
        </RevealWrapper>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700"/>
        <div className="flex flex-col flex-wrap md:flex-row items-start justify-around gap-20">
          <Materiales />
          <div className="flex flex-col mx-auto gap-10 sm:mt-40 bg-gray-400 bg-opacity-30 w-[480px] h-[230px] items-start rounded-xl px-10 justify-center">
            <p className="text-white">Para ver el catálogo completo de tonos y colores, deja tu mensaje</p>
            <div>
              <input type="text" value={message} className="p-2 rounded-xl text-yellow-300 outline-none bg-gray-300 bg-opacity-30" onChange={handleChange} placeholder="Escribe tu mensaje..." />
            </div>
            <a href={generateWhatsappLink()} target="_blank" rel="noopener noreferrer">
              <button className="hover:bg-green-400 duration-500 p-2 rounded-xl hover:text-gray-800 font-medium">Enviar mensaje por <span className="hover:text-black underline">WhatsApp</span></button>
            </a>
          </div>
        </div>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700"/>
      </section>
    </>
  );
}
