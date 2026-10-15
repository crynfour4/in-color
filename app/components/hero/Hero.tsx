const Hero: React.FC = () => {
    return (
        <div className="relative w-full min-h-[85vh] lg:min-h-[95vh] flex items-center overflow-hidden">
            <img 
                src="/hero.png" 
                alt=""
                className="absolute inset-0 w-full h-full object-cover brightness-40 contrast-95 scale-110 lg:scale-none"
            />

            <div className="relative z-1 w-full text-white text-xl flex flex-col justify-center text-shadow-lg/40 py-10 lg:py-0">
                <div className="lg:bg-stone-900/30 lg:backdrop-blur-sm px-14 py-8 lg:px-12 lg:py-10 lg:max-w-1/3 lg:rounded-xl lg:ml-50 flex flex-col gap-8">
                    <p className="text-3xl lg:text-4xl font-bold border-b pb-8">
                        <span className="font-bold">InColor</span> — przestrzeń stworzona z myślą o pięknie, jakości i dobrym samopoczuciu
                    </p>
                    <p className="text-gray-150">
                        Łączymy doświadczenie, pasję i różne specjalizacje, tworząc miejsce, w którym każdy może znaleźć coś dla siebie.
                    </p>
                    <p className="text-gray-150">
                        Poznaj nasz zespół i wybierz specjalistę, który najlepiej odpowiada Twoim potrzebom.
                    </p>
                    <button className="bg-stone-900/70 px-10 py-3 lg:px-8 lg:py-2 rounded-md border mx-auto cursor-pointer text-shadow-lg/50 my-6 lg:my-2">
                        Przejdź →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;