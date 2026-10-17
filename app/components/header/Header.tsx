"use client"
import React, { useState } from "react";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Dropdown from "./Dropdown";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleVisibility = () => {
        setIsOpen((prev) => !prev);
    }
    
  return (
    <header className="bg-black text-white flex flex-row items-center justify-between max-h-18 p-4 border-b sticky top-0 z-10 select-none">
        <div className="flex-1 flex justify-start h-full">
          <img src="/logo2.jpg" alt="Logo" className="max-h-18 object-contain p-4"/>
        </div>
        <Navigation/>
        <div className="flex-1 hidden lg:flex"></div>
        <div className="lg:hidden">
            <FontAwesomeIcon icon={faBars} className="size-5 cursor-pointer" onClick={toggleVisibility}/>
        </div>
        {isOpen && <Dropdown/>}
    </header>
  );
};

export default Header;