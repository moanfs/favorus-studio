/* eslint-disable react/no-unescaped-entities */
import Section from "../components/section";
import Main from "../layout/Main";
import HomeImage from "../assets/img/gambar.png"
import AboutImg from "../assets/img/about.jpg"
import TypeHero from "../components/typeHero";
import HostLiveTalent from "../components/HostLiveTalent";
import CarouselClient from "../components/carousels/CarouselClient";
import Accordion from "../components/Accordion";
import CardHover from "../components/cards/cardHover";
import Header from "../components/Header";
import CarouselTesti from "../components/carousels/CarouselTesti";

const Home = () => {
    return(
    <Main>
        <div className="h-fit  py-20 animated-background bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500 bg-fixed">
            <Section sectionClassName="flex-col flex lg:flex-row justify-between items-center">
                    <div className="xs:w-full lg:w-1/2 xs:order-2 lg:order-1 space-y-5">
                        <h2 className="md:text-[3rem] xs:text-3xl font-semibold text-[#FFB725]">Grow Your Business!</h2>
                        <p className="text-white opacity-80">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ipsa, eius, rerum nemo fugiat, eaque maiores cumque molestias repellat dolore et aut consequatur doloremque atque error quibusdam esse. Adipisci, pariatur?</p>
                        <h1 className="text-white font-medium text-lg">Solusi Ditawarkan <span className="bg-white bg-opacity-25 rounded-sm px-1"><TypeHero/></span></h1>
                        <h1><a href="https://wa.me/0987654321" target="_blank" className="hover:opacity-95 justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-violet-500 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500">Free Konsultasi</a></h1>
                    </div>
                    <div className="xs:w-full lg:w-1/2 xs:order-1 lg:order-2 flex justify-end">
                        <img src={HomeImage} alt="" className="flex h-auto " />
                    </div>
            </Section>
        </div>

       <div className="bg-[#fdfdfd] border-b-[0.1rem]">
       <Section sectionClassName="py-10">
            <div className="flex xs:flex-col lg:flex-row items-center justify-between text-[#191919]">
                <Header title="We'r trusted by client"/>
                <div className="text-center py-4 xs:w-full lg:w-[80%]">
                    <CarouselClient/>        
                </div>
            </div>
        </Section>  
       </div>

        <Section sectionClassName="py-16">
            <Header 
            title="Service"
            subTitle="Layanan Yang ditawarkan" 
            align="items-center"
            aos="zoom-in"
            />
            <div className="flex xs:flex-col md:flex-row gap-5"> 

                <CardHover 
                bgColor="bg-[#f1916d]"
                // bgHover="bg-[#fdc4af]"
                aos="fade-up"
                aosDuration="1000"
                number="01" 
                title="Digital Marketing" 
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste atque soluta excepturi laboriosam molestiae iure deleniti dicta voluptates consequuntur veniam."
                />
                <CardHover
                bgColor="bg-sky-500" 
                // bgHover="bg-sky-400"
                aos="fade-up"
                aosDuration="2000"
                number="02" 
                title="Host Live" 
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste atque soluta excepturi laboriosam molestiae iure deleniti dicta voluptates consequuntur veniam."
                />
                <CardHover 
                bgColor="bg-[#bd83b8]"
                // bgHover="bg-purple-300"
                aos="fade-up"
                aosDuration="3000"
                number="03" 
                title="Branding Design" 
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste atque soluta excepturi laboriosam molestiae iure deleniti dicta voluptates consequuntur veniam."
                />
            </div>
        </Section>

        <Section sectionClassName="py-16">
            <div className="grid md:grid-cols-9 xs:grid-flow-row  gap-10">
                <div className="p-2 bg-[#fdfdfd] rounded-sm ring-1 ring-gray-900/5 xs:col-span-5 lg:col-span-4 shadow" data-aos="fade-right" data-aos-duration="1500">
                    <img src={AboutImg} alt="" className="rounded-sm"/>
                </div>
                <div className="col-span-5" data-aos="fade-left" data-aos-duration="1500">
                    <h1 className="text-3xl font-semibold indent-8" >About Us</h1>
                    <div>
                        <p className="indent-8">Host Live Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo omnis aut rerum dolor. Doloribus consequatur nisi sunt delectus at. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nemo corporis tempora laboriosam doloribus numquam error saepe voluptatem omnis minima.</p>
                    </div>
                </div>
            </div>
        </Section>

        <Section sectionClassName="py-16">
            <Header
            title="Host Live"
            subTitle="Host live yang akan membantu live anda"
            align="items-center"
            aos="zoom-in"
            />
            <HostLiveTalent/>
        </Section>

        <Section sectionClassName="py-16">
            <Header
            title="Testimoni"
            subTitle="apa yang mereka katakan"
            align="items-center"
            aos="fade-left"
            />
            <div className="" data-aos="fade-left" data-aos-duration="1500">
            <CarouselTesti/>    
            </div>
        </Section>

        <div className="bg-[#e5f5ff] py-16">
            <Section sectionClassName="">
                    <Header
                    title="FAQ"
                    subTitle="Yang sering ditanya?"
                    align="items-center"
                    />
                    <ul className="max-w-2xl mx-auto divide-y flex flex-col xs:w-full md:w-3/4 text-wrap opacity-75 ">
                        <Accordion
                        title="Lorem ipsum dolor sit amet."
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet enim facere sunt veniam quo voluptates illum error autem soluta?.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet enim facere sunt veniam quo voluptates illum error autem soluta?."
                        />
                        <Accordion
                        title="Lorem ipsum dolor sit amet."
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet enim facere sunt veniam quo voluptates illum error autem soluta?.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet enim facere sunt veniam quo voluptates illum error autem soluta?."
                        />
                        <Accordion
                        title="Lorem ipsum dolor sit amet."
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet enim facere sunt veniam quo voluptates illum error autem soluta?.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet enim facere sunt veniam quo voluptates illum error autem soluta?."
                        />
                        <Accordion
                        title="Lorem ipsum dolor sit amet."
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet enim facere sunt veniam quo voluptates illum error autem soluta?.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet enim facere sunt veniam quo voluptates illum error autem soluta?."
                        />
                    </ul>
            </Section>
        </div>
    </Main>
    )
};
export default Home;