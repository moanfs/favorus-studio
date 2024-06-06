const CardHover = ({bgColor="", bgHover="", number="", aos="", content="", aosDuration ="", title=""}) => {
    return (
    <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl xs:mx-auto xs:max-w-sm xs:rounded-lg " data-aos={aos} data-aos-duration={aosDuration}>
        <div className="absolute flex flex-row items-center gap-5">
            <span className={`top-10 z-0 h-20 w-20 rounded-full  transition-all duration-300 ${bgColor} group-hover:scale-[10]`}></span>
            <h1 className="z-0 text-xl group-hover:text-white/90 text-[#191919] font-semibold">{title}</h1>
        </div>
        <div className="relative z-10 mx-auto max-w-md">
            <span className={`grid h-20 w-20 place-items-center rounded-full ${bgColor} transition-all text-white text-3xl font-semibold duration-300 group-hover:${bgHover}`}>{number}</span>
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>{content}</p>
            </div>
        </div>
    </div>
    )
}

export default CardHover