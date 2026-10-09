import React from "react";
import NavLink from "./NavLink";

const Dropdown: React.FC = () => {
  return (
    <nav className="flex flex-col items-center justify-center space-y-5 lg:hidden absolute bg-black w-full top-18 left-0 p-4">
        <NavLink href="#">Poznaj nas</NavLink>
        <NavLink href="#">Lokalizacja</NavLink>
        <NavLink href="#">Opinia</NavLink>
    </nav>
  )
}

export default Dropdown;