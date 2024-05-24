const Title = ({titleLeft, titleRight, titleColor, subTitle}) =>{
    return(
        <div className="text-header m-4 text-center">
        <h1 className="fw-bold fs-2 mb-3">{titleLeft}<span>{titleColor}</span>{titleRight}</h1>
        <figcaption className="blockquote-footer">{subTitle}</figcaption>
    </div>
    )
}
export default Title;