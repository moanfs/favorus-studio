export default function Feedback(){
    return(
        <div className="feedback container my-4">
            <div className="text-header m-4 text-center">
                <h1 className="fw-bold fs-2 mb-3">Tes<span>timoni</span></h1>
                <figcaption className="blockquote-footer">Apa yang dikatakan mereka</figcaption>
            </div>
            <div className="d-flex justify-content-center ">
                <div id="carouselExampleRide" className="carousel slide col-10 col-lg-6 " data-bs-ride="true">
                    <div className="carousel-inner text-center">
                        <div className="carousel-item active">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, accusantium animi architecto ea eos dolor numquam minus illum nulla similique?</p>
                        </div>
                        <div className="carousel-item">
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, accusantium animi architecto ea eos dolor numquam minus illum nulla similique?</p>
                        </div>
                        <div className="carousel-item">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, accusantium animi architecto ea eos dolor numquam minus illum nulla similique?</p>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                        <span className="carousel-control-next-icon " aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* <div className="carousel-control-outside">
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                        <span className="carousel-control-next-icon " aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div> */}
            </div>
        </div>
    )
}