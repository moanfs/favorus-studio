import HomeImage from "../assets/img/gambar.png"
// import Rocket from "../assets/img/rocket.png"
export default function Home(){
    return(
        <div className="home d-flex justify-content-center">
            <div className="row home-row col-12 col-lg-10 justify-content-center align-content-center align-content-lg-stretch">
                <div className="text-home col-12 col-lg-6 align-content-center text-center">
                    <h2 className="text-grow">Grow Your </h2>
                    <h1 className="text-business ">Business!</h1>
                    <p className="text-description">Need Host Live for your business</p>
                </div>
                <div className="image col-12 col-lg-6 align-content-center">
                    <img src={HomeImage} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}