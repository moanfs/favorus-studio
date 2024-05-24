const CardBlog = ({title, content, image}) => {
    return (
    <div className="card-service card col-10 col-lg">
        <img src={image} alt="images blog" />
        <h1 className="service-head">{title}</h1>
        <p>{content}</p>
    </div> 
    )
}
export default CardBlog