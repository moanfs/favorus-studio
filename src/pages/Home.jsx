import HomeImage from "../assets/img/gambar.png"
import Footer from "../components/Footer";
import HostLiveTalent from "../components/HostLiveTalent";
import Title from "../components/Title";
import CardService from "../components/cards/CardService";
import AboutImg from "../assets/img/about.jpg"
import ImagesClient from "../components/cards/ImagesClient";
import ImgCarousel from "../components/carousels/ImgCarousel";

const Home = () => {
    return(
    <div className="">
        <div className="home d-flex justify-content-center">
            <div className="row col-12 col-lg-10 align-content-center  align-content-lg-stretch ">
                <div className="text-home col-12 col-lg-6 align-content-center text-center order-lg-1 order-2">
                    <h2 className="display-5 text-grow mb-0 fst-italic">Grow Your </h2>
                    <h1 className="display-2 text-business mt-0 fst-italic">Business!</h1>
                    <p className="lead text-description fst-italic">Need Host Live for your business</p>
                </div>
                <div className="image col-12 col-lg-6 align-content-center align-content-lg-center order-lg-2 order-1">
                    <img src={HomeImage} alt="" className="img-fluid" />
                </div>
            </div>
        </div>

        <div className="service mt-5 col-12 col-lg-8 mx-auto" id="service">
            <Title titleLeft="Our " titleColor="Service" subTitle="Layanan yang kami berikan"/>
            <div className="row gap-3 justify-content-center">
                <CardService 
                number="01" 
                title="Digital Marketing" 
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste atque soluta excepturi laboriosam molestiae iure deleniti dicta voluptates consequuntur veniam."
                
                />
                <CardService 
                number="02" 
                title="Host Live" 
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste atque soluta excepturi laboriosam molestiae iure deleniti dicta voluptates consequuntur veniam."
                />
                <CardService 
                number="03" 
                title="Branding Design" 
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste atque soluta excepturi laboriosam molestiae iure deleniti dicta voluptates consequuntur veniam."
                />
            </div>
        </div>

        <div className="about mx-auto mt-5 col-12 col-lg-8" id="about">
            <Title titleColor="About " titleRight="Us"  subTitle="Layanan yang kami berikan"/>
            <div className="row gap-3 justify-content-center">
                <div className="card-about col-10 col-lg-5">
                    <img src={AboutImg} alt="" className="img-about img-fluid  rounded-4"/>
                </div>
                <div className="col-10 col-lg">
                    <div>
                        <h4 className="">Good Solution</h4>
                        <p className="service-content">Host Live Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo omnis aut rerum dolor. Doloribus consequatur nisi sunt delectus at.</p>
                    </div>
                    <div>
                        <h4 className="">Good Solution</h4>
                        <p className="service-content">Host Live Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo omnis aut rerum dolor. Doloribus consequatur nisi sunt delectus at.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="client py-2 mt-5">
            <div className="container my-4 col-12 col-lg-8" id="client">
                <div className="row gap-3 justify-content-center">
                    <div className="col-12 col-lg-5 text-header my-auto">
                        <h4 className="fw-bold">Our <span>Client</span></h4>
                        <p className="service-content">Berdiri sejak 2022, kami melayani dengan sepenuh hati 💖💖</p>
                    </div>
                    <div className="col-12 col-lg-7 row gap-4 align-items-center">
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner d-flex justify-content-center">
                            <ImgCarousel active="active">
                                <ImagesClient image="https://www.vhv.rs/dpng/d/494-4944646_logo-unilever-png-hd-transparent-png.png"/>               
                            </ImgCarousel>
                            <ImgCarousel>
                                <ImagesClient image="https://www.vhv.rs/dpng/d/494-4944646_logo-unilever-png-hd-transparent-png.png"/>               
                            </ImgCarousel>
                            <ImgCarousel>
                                <ImagesClient image="https://www.vhv.rs/dpng/d/494-4944646_logo-unilever-png-hd-transparent-png.png"/>               
                            </ImgCarousel>
                            </div>
                        </div>                  
                    </div>
                </div>
            </div>
        </div>

        <div className="host-live-talent mx-auto mt-5 col-12 col-lg-9" id="host-live">
            <Title titleLeft="Our " titleColor="Host Live" subTitle="Host yang siap membantu live anda"/>
            <div className="row gap-2 justify-content-center my-4">
               <HostLiveTalent/>
            </div>
        </div>

        <div className="feedback my-5 mx-auto col-12 col-lg-10">
            <Title titleLeft="Tes" titleColor="timoni" subTitle="Apa yang dikatakan mereka"/>
            <div className="d-flex justify-content-center">
                <div id="carouselExampleAutoplaying" className="carousel slide col-12 col-lg-6 carousel-feedback" data-bs-ride="carousel">
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
                </div>
            </div>
        </div>

        <Footer/>
    </div>
    )
}

export default Home;