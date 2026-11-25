const Headline: React.FC<{children: string}> = ({children}) => {
    return (
        <p className="font-bold text-lg lg:text-xl text-center pb-3 text-neutral-200">
            {children}
        </p>
    )
}

export default Headline;