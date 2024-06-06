import Section from "./section";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandGoogleMaps } from "react-icons/tb";
import { FaTiktok } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";

export default function Footer(){
    return(
        <footer className="bg-[#191919]">
            <Section sectionClassName="text-white ">
                <div className="lg:grid lg:grid-cols-2 sm:flex sm:flex-row gap-4 py-10 opacity-85">
                    <div className="">
                        <h4 className="font-semibold text-2xl">Favorus Studio</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam maiores quo ipsum molestiae libero, officia mollitia perferendis veritatis magni aliquam possimus sint repellat enim, esse nisi facilis voluptas repellendus! Nulla?</p>
                    </div>
                    <div className="flex flex-col sm:items-start lg:items-end xs:mt-10 lg:mt-0">
                        <div className="space-y-2">
                            <h5 className="flex items-center"><FaWhatsapp size={24} className="mr-4"/> 0821321323123</h5>
                            <p className="flex items-center"><MdOutlineEmail size={24} className="mr-4"/> favorus.studio@gmail.com</p>
                            <p className="flex items-center"><TbBrandGoogleMaps size={24} className="mr-4"/>Kota Bengkulu, Bengkulu</p>
                            <p>Follow On:</p>
                            <div className="flex gap-4">
                                <a  href="" target="_blank"><FaTiktok size={24}/></a>
                                <a  href="https://www.instagram.com/favorus.studios/" target="_blank"><IoLogoInstagram size={24}/></a>
                                <a  href="" target="_blank"><FaFacebookF size={24}/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="opacity-50"/>
                <div className="flex xs:flex-col sm:flex-row justify-between py-4 text-xs ">
                    <p className="text-center">&copy; 2024 Favorus Studio. All rights reserved.</p>
                    <a href="https://halomoan-xi.vercel.app/" target="_blank" className="text-white text-center">website build by @moanfs</a>
                </div>
            </Section>
        </footer>
    )
}