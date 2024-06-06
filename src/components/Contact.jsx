import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

export default function Contact(){
    const [isActive, setIsActive] = useState(false);
    const toggleContacts = () => {
        setIsActive(!isActive);
      };

    return(
        <div className="fixed bottom-8 right-8 w-80 flex flex-col gap-2 items-end">
            {isActive && (
            <div className="bg-white rounded-xl p-4 shadow">
                <div className="text-center">
                    <h3 className="text-[#345D73] font-bold text-xl">Hallo</h3>
                    <p className="text-[#555] my-2">Click on one of our Admin below to chat on WhatsApp</p>
                </div>
                <div className="flex gap-4 flex-col">
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex item-center gap-4 rounded-lg p-3 bg-[#f9f9f9] text-[#333] hover:bg-[#e0e0e0]">
                        <FaWhatsapp size={24}/>
                        <span>Admin 1</span>
                    </a>
                    <a href="https://wa.me/0987654321" target="_blank" rel="noopener noreferrer" className="flex item-center gap-4 rounded-lg p-3 bg-[#f9f9f9] text-[#333] hover:bg-[#e0e0e0]">
                        <FaWhatsapp size={24}/>
                        <span>Admin 2</span>
                    </a>
                </div>
            </div>
            )}
            <button className="flex w-14 h-14 bg-[#2CB742] rounded-full items-center justify-center text-white cursor-pointer transition ease-in-out shadow hover:scale-110" onClick=  {toggleContacts}>
                {isActive ? <AiOutlineClose size={32}/> :  <FaWhatsapp size={32}/>}
            </button>
      </div>
    )
}