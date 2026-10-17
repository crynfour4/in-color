const Card: React.FC<{photo: string, person: {name: string, surname: string}, role: string}> = ({photo, person, role}) => {
    return (
        <div className="flex flex-col items-center max-w-80 my-4 lg:my-2 lg:p-6 border border-neutral-900 hover:border hover:border-white/50 rounded-xl hover:shadow-md hover:shadow-white/30 hover:transition-all hover:duration-300 hover:ease-out">
            <a href={`/zespol/${person.name.toLowerCase()}_${person.surname.toLowerCase()}`}>
                <div className="relative w-50 h-50 lg:w-60 lg:h-60 rounded-full overflow-hidden mb-4">
                    <img src={photo} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.3)] pointer-events-none" />
                </div>
            </a>
            <p className="font-bold text-center text-2xl mb-1.5 text-shadow-lg/40">{person.name} {person.surname}</p>
            <p className="text-center text-gray-100 text-shadow-lg/40 text-lg pb-4 lg:pb-0">{role}</p>
        </div>
    )
}

export default Card;