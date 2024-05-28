const Card = ({cardClass, children}) => {
    const cardPropertiClass = `card ${cardClass}`
    // const TitlePropertiClass = `${titleClass}`
    return (
    <div className={`${cardPropertiClass}`}>
        <p>{children}</p>
    </div> 
    )
}
export default Card