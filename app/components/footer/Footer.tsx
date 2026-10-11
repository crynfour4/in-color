import NavLink from "../header/NavLink";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col lg:flex-row bg-black text-white p-6 lg:p-8 border-t justify-between items-start lg:items-center lg:max-h-24 gap-5 lg:gap-0">
        <p>
            <p className="font-bold">InColor</p>
            by Iryna Tron
        </p>
        <NavLink href="/regulamin">Regulamin</NavLink>
        <p>
            ul. Mariana Hemara 3
            <p>80-280 Gdańsk</p>
        </p>
    </footer>
  )
}

export default Footer;