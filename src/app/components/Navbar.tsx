"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/app/components/ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 dark", className)}
    >
      <Menu setActive={setActive}>
      <div className="text-white">
        <Link href="/">
          Home
     </Link>
        </div>
  
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Training</HoveredLink>
            <HoveredLink href="/interface-design">Event Organization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        {/* <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4 dark">
    

            <div className="text-white">
              Training Program
            </div>
            <div className="text-white">
              Musical instruments
            </div>
            <div className="text-white">
              Official Merge
            </div>
          </div>
        </MenuItem> */}
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Songs">
        <div>
        <HoveredLink href="/SongComposer">
        YOUR LYRICS

        </HoveredLink>

        </div>
      
        </MenuItem>
        {/* <div className="text-white">
        <Link href="/">
          Home
     </Link>
        </div>
   */}
    <div className="text-white">
        <Link href="/SignIn">
          Sign In
     </Link>
        </div>
        
      </Menu>
    </div>
  );
}
