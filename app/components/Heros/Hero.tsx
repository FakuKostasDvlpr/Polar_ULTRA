import React from "react";
import { cn } from "../../utils/cn4";
import { Spotlight } from "../ui/Spotlight";
import ServiceCard from "../cards/services-card-";

export function Hero() {
    
  return (
    <>
     <div id="servicio" className="gap-5 h-screen w-full flex flex-col md:items-center md:justify-center bg-[#020617] antialiased bg-grid-white/[0.02] relative ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-yellow-400 bg-opacity-50">
          Nuestros <br /> Servicios
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
      </div>
    <ServiceCard/>
    </div>
    </>
   
  );
}
