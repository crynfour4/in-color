import Card from "./Card";

const Team: React.FC = () => {
    return (
        <div className="text-white w-full h-full lg:py-10 flex flex-col justify-center items-center my-10">
            <p className="font-bold text-3xl lg:text-5xl mb-2 lg:mb-4 text-shadow-lg/40">Nasz zespół</p>
            <p className="text-lg lg:text-xl mb-8 lg:mb-10 text-shadow-lg/40 text-center text-gray-200 max-w-3/4">Kliknij zdjęcie wybranego specjalisty, aby dowiedzieć się więcej.</p>

            <Card photo="/team/iryna_tron/iryna_tron.png" person={{name: "Iryna", surname: "Tron"}} role='Stylistka i kolorystka włosów'/>

            <div className="flex flex-col lg:flex-row lg:gap-50 justify-center items-center">
                <Card photo="/team/tetiana_salivonchyk/tetiana_salivonchyk.jpg" person={{name: "Tetiana", surname: "Salivonchyk"}} role='Stylistka i instruktorka przedłużania włosów'/>
                <Card photo="/team/anastasiia_filippova/anastasiia_filippova.png" person={{name: "Anastasiia", surname: "Filippova"}} role='Stylistka z przedłużania włosów'/>
                <Card photo="/team/natalia_vitiuk/natalia_vitiuk.png" person={{name: "Natalia", surname: "Vitiuk"}} role='Stylistka, kolorystka i fryzjerka włosów'/>
            </div>
        </div>
    )
}

export default Team;