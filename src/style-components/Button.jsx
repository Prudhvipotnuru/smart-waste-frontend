function Button({children}){
    return(
        <>
            <button className="bg-sky-400 px-4 py-1 border-2 border-black rounded-lg
           text-black font-mono hover:bg-sky-700 hover:cursor-pointer">{children}</button>
        </>
    )
}

export default Button;