import SalonMap from "./SalonMap";

const SalonLocation: React.FC = () => {
    return (
        <div id="location" className="lg:w-1/2 mx-auto mb-20 px-10">
            <h1 className="font-bold text-3xl lg:text-5xl mb-2 lg:mb-4 text-shadow-lg/40 text-white text-center pb-10">Znajdź nas na mapie</h1>
            <div className="rounded-lg flex flex-col lg:flex-row border border-white bg-black">
                <div className="pt-4 pb-5 lg:py-4 px-6 text-white lg:w-1/2">
                    <p className="text-lg font-bold">Adres</p>
                    <p className="text-neutral-100">ul. Mariana Hemara 3</p>
                    <p className="text-neutral-100">80-280 Gdańsk</p>

                    <p className="text-lg font-bold mt-3">Przystanki obok</p>
                    <p className="text-neutral-100 mb-1"><span className="font-bold">Tramwaj:</span> Galeria Bałtycka, Zamenhofa</p>
                    <p className="text-neutral-100 mb-1"><span className="font-bold">Autobus:</span> Galeria Bałtycka, Zabytkowa, Chrzanowskiego</p>
                    <p className="text-neutral-100 mb-1"><span className="font-bold">SKM:</span> Gdańsk Zaspa, Gdańsk Wrzeszcz</p>
                </div>
                <SalonMap/>
            </div>
        </div>
    )
}

export default SalonLocation;