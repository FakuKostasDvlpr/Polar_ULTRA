import React from "react";
import { Chip } from "@nextui-org/react";
import { CheckIcon } from "./CheckIcon";

export default function Chips() {
  const ChipsItems = ["Ploteo para tu auto", "Pulido de opticas", "Instalacion de alarmas", "Reparacion de aire"];

  return (
    <div className="flex flex-col mt-5 gap-4">
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
  );
}
