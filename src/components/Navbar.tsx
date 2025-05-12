"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 px-4 sm:px-6 md:px-8",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            />
          </Link>

          <MenuItem
            setActive={setActive}
            active={active}
            item="Services"
          >
            <div className="flex flex-col gap-2 p-4">
              <HoveredLink href={"/products/1"}>Join as a Server</HoveredLink>
              <HoveredLink href={"/products/2"}>Want a service</HoveredLink>
              <HoveredLink href={"/products/3"}>Need a help</HoveredLink>
            </div>
          </MenuItem>

          <Link href={"/contact"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Us"
            />
          </Link>
        </Menu>
      </div>
    </>
  );
};

export default Navbar;
