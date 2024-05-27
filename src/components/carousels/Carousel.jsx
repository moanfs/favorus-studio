const Carousel = ({children, slide}) =>{
    return(
    <div id="carouselExampleAutoplaying" className={`carousel slide ${slide}`} data-bs-ride="carousel">
        <div className="carousel-inner">
            {children}   
        </div>
    </div> 
    )  
}
export default Carousel