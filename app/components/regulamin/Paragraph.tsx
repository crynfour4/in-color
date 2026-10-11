const Paragraph: React.FC<{children: string}> = ({children}) => {
    return (
        <p className="text-md lg:text-lg text-center pb-10">
            {children}
        </p>
    )
}

export default Paragraph;