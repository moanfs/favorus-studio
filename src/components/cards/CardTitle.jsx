const CardTitle = ({titleClass, titleHead, titleIcon, titleText}) =>{
    <div className={`${titleClass}`}>
        <h5>{titleIcon} {titleHead}</h5>
        <p>{titleText}</p>
    </div>
}
export default CardTitle