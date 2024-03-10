import React from "react";
import Privacidad from "../ui/icons/Privacidad";
import Security from "../ui/icons/Security";
import "../../globals.css"
import Temp from "../ui/icons/Temp";
import Money from "../ui/icons/Money";

export default function App() {
  return (
    <>
    {/* 1 */}
    <div className="flex flex-col">
      <div className="flex gap-10 m-10">
        <div className="grow h-[220px]">
            <div className="card h-[220px] bg-white flex items-center card max-w-md mx-auto justify-center bg-neutral text-gray-300">
              <div className="mb-3 p-2 gap-3 card-body text-center items-center flex justify-center flex-col">
                <Security/>
                <h2 className="card-title font-medium">Seguridad</h2>
                <p className="hidden sm:block">Ofrecemos films antivandalicos que fortalecen la seguridad de tu espacio, proporcionando una capa adicional de protección contra posibles daños.</p>
              </div>
          </div>
        </div>
        <div className="grow gap-10 h-[220px]">
            <div className="card  h-[220px] bg-white flex items-center card max-w-md mx-auto justify-center bg-neutral text-gray-300">
              <div className="mb-3 p-2 gap-3 card-body text-center items-center flex justify-center flex-col">
                <Privacidad/>
                <h2 className="card-title font-medium">Privacidad</h2>
                <p className="hidden sm:block">Transformamos tus espacios con materiales espejados y esmerilados, brindando la privacidad necesaria sin comprometer el estilo y la estética de tu entorno.</p>
              </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="flex gap-10 m-10">
        <div className="grow h-[220px]">
            <div className="card h-[220px] bg-white flex items-center card max-w-md mx-auto justify-center bg-neutral text-gray-300">
              <div className="mb-3 p-2 gap-3 card-body text-center items-center flex justify-center flex-col">
                <Temp/>
                <h2 className="card-title font-medium">Aislamiento termico</h2>
                <p className="hidden sm:block">Adaptamos nuestras soluciones a tus necesidades específicas, ofreciendo una amplia gama de films especiales que cumplen con los requisitos técnicos y estéticos de cada proyecto.</p>
              </div>
          </div>
        </div>
          <div className="grow h-[220px]">
              <div className="card h-[220px] bg-white flex items-center card max-w-md mx-auto justify-center bg-neutral text-gray-300">
                <div className="mb-3 p-2 gap-3 card-body text-center items-center flex justify-center flex-col">
                  <Money/>
                  <h2 className="card-title font-medium">Venta por Mayor</h2>
                  <p className="hidden sm:block">Brindamos productos de alta calidad en grandes cantidades a precios competitivos, siempre adaptándonos a las necesidades únicas de cada cliente
                  <br /> 
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
