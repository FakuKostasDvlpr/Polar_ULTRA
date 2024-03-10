import React from "react";
import { Chip } from "@nextui-org/react";
import { CheckIcon } from "./CheckIcon";
import { RevealWrapper } from "next-reveal";

export default function Chips() {
  const ChipsItems = ["Ploteo para tu auto", "Pulido de opticas", "Instalacion de alarmas", "Reparacion de aire"];

  return (
  <RevealWrapper delay={700} distance="50px" duration={1200} easing='cubic-bezier(0.5, 0, 0, 1)' origin="right" reset={true} >
    <div className="grid grid-cols-2 m-2 gap-4 items-center justify-center">
      {ChipsItems.map((chip, index) => (
        <Chip
          key={index} 
          className="bg-[#0AA5C1] text-white cursor-pointer border-none"
          startContent={<CheckIcon size={18} height={undefined} width={undefined} />}
          variant="flat"
          color="success"
        >
          {chip}
        </Chip>
      ))}
    </div>
  </RevealWrapper >

  );
}
