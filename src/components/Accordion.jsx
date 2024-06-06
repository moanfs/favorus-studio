import { FaChevronRight } from "react-icons/fa";

const Accordion = ({title="", content=""}) => {
    
    return(
        <li>
            <details className="group">
                <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                    <div className="w-5 h-5 text-gray-500 transition group-open:rotate-90">
                        <FaChevronRight />
                    </div>
                    <span className="">{title}</span>
                </summary>
                <article className="px-4 pb-4">
                    <p>{content}</p>
                </article>
            </details>
        </li>
    )
}

export default Accordion