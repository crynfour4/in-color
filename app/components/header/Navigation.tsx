import React from "react";
import NavLink from "./NavLink";

const Navigation: React.FC = () => {
  return (
    <nav className="flex-row items-center justify-center space-x-6 hidden lg:flex">
        <NavLink href="/">Strona główna</NavLink>
        <NavLink href="/#zespol">Poznaj nas</NavLink>
        <NavLink href="/#">Lokalizacja</NavLink>
    </nav>
  )};

export default Navigation;