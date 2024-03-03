"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Servicio",
      link: "#servicio",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
      {
        name: "Polarizados",
        link: "#polarizados",
        icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Contact",
        link: "#contacto",
        icon: (
          <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
