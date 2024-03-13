"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Servicio",
      link: "#servicio",
    },
      {
        name: "Polarizados",
        link: "#polarizados",
      },
      {
        name: "Contacto",
        link: "#contacto",
        },
      {
        name: "Materiales",
        link: "#materiales",
        },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
