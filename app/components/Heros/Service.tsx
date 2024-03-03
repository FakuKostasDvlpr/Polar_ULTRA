import React from "react";
import { cn } from "../../utils/cn4";
import { Spotlight } from "../ui/Spotlight";
import ServiceCard from "../cards/services-card-";

export function Service() {
    
  return (
    <>
     <div id="servicio" className="gap-5 flex flex-col md:items-center md:justify-center bg-[#020617] antialiased bg-grid-white/[0.02] relative ">
      <Spotlight
        className="top-40 left-0 md:left-60 md:-top-20"
        fill="#0BA3BF"
      />
      <div className=" p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-cyan-400 bg-opacity-50">
          Nuestros <br /> Servicios
        </h1>
        <p className="mt-10 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        Seguridad, estilo y garantía en cada detalle. Nuestra misión es hacer realidad tu visión, construyendo juntos un espacio único y cautivador. Descubre la excelencia respaldada por nuestra dedicación y la tranquilidad de nuestra garantía. ¡Bienvenido a una experiencia de construcción donde cada detalle cuenta y tu visión cobra vida!
        </p>
      </div>
    <ServiceCard/>
    </div>
    </>
   
  );
}
