import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import productsData from "../../data/data";

export default function App() {
  return (
    <div className="flex gap-10">
      {productsData.map(item => (
        <Card
          key={item.id}
          isFooterBlurred
          radius="lg"
          className="border-none relative gap-10"
        >
          <Image
            alt={item.name}
            className="object-cover"
            height={200}
            src={item.image}
            width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Precio: ${item.price}</p>
            <Button
              className="text-tiny text-white bg-black/20"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              Notify me
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
