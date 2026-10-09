import React from "react";

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a href={href} className="text-lg text-white font-light group transition-all duration-300 ease-in-out">
        <span className="bg-bottom-left bg-linear-to-r from-white to-white bg-size-[0%_2px] bg-no-repeat group-hover:bg-size-[100%_2px] transition-all duration-500 ease-out">
            {children}
        </span>
    </a>
  );
}

export default NavLink;