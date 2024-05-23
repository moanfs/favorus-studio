export default function Service({children}){
    return(
        <div className="service container mt-5 col-12 col-lg-8" id="service">
            <div className="text-header m-4 text-center">
                <h1 className="fw-bold fs-2 mb-3">Our <span>Service</span></h1>
                <figcaption className="blockquote-footer">Layanan yang kami berikan</figcaption>
            </div>
            <div className="row gap-3 justify-content-center">
                {children}
            </div>
        </div>
    )
}