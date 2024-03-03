import React from "react";
import {Image} from "@nextui-org/react";

export default function Imagenes() {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row gap-10">
        <Image
        width={300}
        height={200}
        src="https://polar-ops.vercel.app/car-1.jpg"
        fallbackSrc=""
        alt="NextUI Image with fallback"
        />
        <Image
        width={300}
        height={200}
        src="https://polar-ops.vercel.app/car-2.jpg"
        fallbackSrc=""
        alt="NextUI Image with fallback"
        />
    </div>
  );
}