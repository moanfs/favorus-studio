import HomeImage from "../assets/img/gambar.png"
// import Rocket from "../assets/img/rocket.png"
export default function Home(){
    return(
        <div className="home">
            <div className="container">
                <div className="row col-8 col-md-12 home-content">
                    <div className="col text-home ">
                        {/* <img src={Rocket} alt="" className="img-rocket" /> */}
                        <h2 className="text-grow">Grow Your </h2>
                        <h1 className="text-business">Business!</h1>
                        <p className="text-description">Need Host Live for your business</p>
                    </div>
                    <div className="col image flex-column justify-content-center align-content-center ">
                        <img src={HomeImage} alt="" className="img-side" />
                    </div>
                </div>
            </div>
        </div>
    )
}