import Button from "../components/buttons/Button"
import Main from "../layout/Main"
import logos from "../assets/img/logos.svg"
import Accordion from "../components/accordion/Accordion"
import AccordionItem from "../components/accordion/AccordionItem"
import AccordionContent from "../components/accordion/AccordionContent"
import AccordionButton from "../components/accordion/AccordionButton"
import Title from "../components/title/Title"
import Card from "../components/cards/Card"
import CardNoBorderD3 from "../components/cards/CardNoBorderD3"

const Service = () =>{
    return(
    <Main>
        <div className="service-page">
            <div className="text-center ">
                <h1 className="text-capitalize">Layanan yang kami berikan</h1>
                <p className="text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur quae officiis optio dolorum totam.</p>
                <Button color="warning text-white fw-semibold">Konsultasi Gratis</Button>
            </div>
            <div className="col-12 col-lg-8 d-flex mx-auto row mt-5">
                <CardNoBorderD3>
                        <h5 ><i className="bi bi-laptop"></i> Digital Marketing</h5>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </CardNoBorderD3>
                <CardNoBorderD3 cardClass="border-start border-end">
                    <h5 ><i className="bi bi-tiktok"></i> Host Live</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, molestias!</p>  
                </CardNoBorderD3>
                <CardNoBorderD3>
                    <h5><i className="bi bi-window-dock"></i> Branding Design</h5>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, molestias!</p>
                </CardNoBorderD3>
            </div>
        </div>
        <div className="service-why">
            <div className="container col-12 col-lg-8 mx-auto row py-4 row d-flex align-items-center">
                <div className="col-12 col-lg-6">
                    <h5 className="fw-semibold" >Mengapa Membutuhkan Kami?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere eius voluptatum ab sint quod itaque odio sapiente sequi expedita.</p>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center ">
                    <img src={logos} alt="" className=" img-fluid" width="300px"/>
                </div>
            </div>
        </div>

        <div className="container mt-5">
            <Title titleColor="Goals"  subTitle="Goals yang kami miliki"/>
            <div className="service-goals col-12 col-lg-8 mx-auto d-flex row gap-lg-5 gap-3 justify-content-center">
                <Card cardClass="col-12 col-lg-5 ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos magni provident, odit laudantium deleniti aspernatur quisquam reprehenderit dignissimos quidem. Optio non impedit voluptate repellat voluptatum et doloremque distinctio fuga consequuntur!
                </Card>
                <Card cardClass="col-12 col-lg-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos magni provident, odit laudantium deleniti aspernatur quisquam reprehenderit dignissimos quidem. Optio non impedit voluptate repellat voluptatum et doloremque distinctio fuga consequuntur!
                </Card>
            </div>
        </div>

        <div className="service-fag container col-12 col-lg-8 mx-auto my-5">
            <Title titleRight="FAQ"  subTitle="Hal yang sering ditanya"/>
            <Accordion accoType="accordionFlushExample" accorId="accordionFlushExample">
                <AccordionItem targetId="satu">
                    <AccordionButton  buttonText="Berapa biaya untuk live tiktok?"/>
                    <AccordionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos cupiditate nemo!</AccordionContent>
                </AccordionItem>
                <AccordionItem targetId="dua">
                    <AccordionButton buttonText="Social Media Menagement?"/>
                    <AccordionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos cupiditate nemo!</AccordionContent>
                </AccordionItem>
                <AccordionItem targetId="tiga">
                    <AccordionButton buttonText="Social Media Menagement?"/>
                    <AccordionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos cupiditate nemo!</AccordionContent>
                </AccordionItem>
                <AccordionItem targetId="empat">
                    <AccordionButton buttonText="Social Media Menagement?"/>
                    <AccordionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos cupiditate nemo!</AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </Main>
    )
}
export default Service