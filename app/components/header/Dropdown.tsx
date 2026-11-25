import React from "react";
import NavLink from "./NavLink";

const Dropdown: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <nav className="flex flex-col items-center justify-center space-y-5 lg:hidden absolute bg-black w-full top-18 left-0 p-4 z-10">
      <NavLink href="/" onClick={onClose}>Strona główna</NavLink>
      <NavLink href="/#team" onClick={onClose}>Poznaj nas</NavLink>
      <NavLink href="/#location" onClick={onClose}>Lokalizacja</NavLink>
    </nav>
  );
};

export default Dropdown;