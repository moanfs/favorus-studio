import { FcLike } from "react-icons/fc";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";

const CardHostLive = ({data}) => {
   return(
   <div className="p-4 bg-[#fdfdfd] rounded-sm ring-1 ring-gray-900/5" data-aos="fade-up">
      <div className="flex">
         <h1 className="font-semibold">Favorus Studio</h1>
      </div>
      <img src={data.images} alt={data.nama} className="w-full h-72 mx-auto"  />
      <div className="mt-2 gap-">
         <div className="flex gap-2 items-center ">
         <FcLike size={24}/>
         <FaRegComment size={22} className="opacity-90"/>
         <IoPaperPlaneOutline size={22} className="rotate-12"/>
         </div>
      </div>
  </div>
   )
}
export default CardHostLive