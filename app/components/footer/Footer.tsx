import NavLink from "../header/NavLink";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col lg:flex-row bg-black text-white p-6 lg:p-8 border-t justify-between items-start lg:items-center lg:max-h-24 gap-5 lg:gap-0">
        <div>
          <p className="font-bold">InColor<br/></p>
          <p>by Iryna Tron</p>
        </div>
        <NavLink href="/regulamin">Regulamin</NavLink>
        <div>
          <p>ul. Mariana Hemara 3<br/></p>
          <p>80-280 Gdańsk</p>
        </div>
    </footer>
  )
}

export default Footer;