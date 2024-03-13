"use client"
import React from "react";
import Imagenes from "../ui/Image";
import Chips from "../ui/Chips";
import Videos from "../cards/videos";
import ObrasTipo from "../cards/Obras-colocacion";
import MarcasBranding from "../cards/MarcasBranding";
import { RevealWrapper } from 'next-reveal'
import Materiales from "./Materiales";

export function Polarizado() {

  return (
    <>
        <section id="polarizados" className="gap-4 flex-col m-auto text-white items-center justify-center flex bg-[#020617]">
      <RevealWrapper delay={300} distance="50px" duration={1000} easing='cubic-bezier(0.5, 0, 0, 1)' origin="bottom" reset={true} >
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
          </div>
          <MarcasBranding />
      </RevealWrapper>
        </section>
        <div className="flex bg-[#020617]">
            <Materiales/>
        </div>
    </>
  );
}
