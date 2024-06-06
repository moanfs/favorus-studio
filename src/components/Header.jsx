const Header = ({title="", subTitle="", align="", aos=""}) =>{
    const tSize = align === "items-center" ? "text-[2rem]" : "text-[1.2rem]"
    return(
    <div className={`flex flex-col ${align}`} data-aos={aos}>
        <h1 className={`font-medium  ${tSize}`}>{title}</h1>
        <p className="mb-5">{subTitle}</p>
    </div>
    )
}
export default Header