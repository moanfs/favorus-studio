/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { CgMenuRightAlt } from "react-icons/cg";
import Section from "./section";

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
  
    useEffect(() => {
      const updatePosition = () => {
          setScrollPosition(window.scrollY)
      }
  
      window.addEventListener('scroll', updatePosition)
  
      updatePosition()
  
      return () => window.removeEventListener('scroll', updatePosition)
    }, [])
  
    return scrollPosition
}


const Nav = () =>{
    const [toggle, setToggle] = useState(false);
    
    function openMenu(){
        setToggle(true);
    }

    function closeMenu(){
        setToggle(false);
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    const scrollPosition = useScrollPosition();

    return(
    <>
    {/* <div className="xs:w-11/12 lg:w-4/6 mx-auto text-end">
        instagram
    </div> */}
    <nav className={classNames(scrollPosition > 50 ? "animated-background bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500 shadow" : "bg-transparent", " transition duration-500 ease-in-out w-full  py-4 z-50  fixed top-0")}>
        <Section sectionClassName="flex items-center justify-between ">
            <NavLink to="/" className="font-bold text-3xl text-[#fff]">Favorus</NavLink>
            <div className="xs:hidden sm:hidden lg:block space-x-8 text-[#fff] text-base">
                <NavLink to="/" className={(({isActive}) => isActive ? "font-bold opacity-100 border-b-2 px-2 rounded-b-md" : " opacity-80")} >Home</NavLink>
                <NavLink to="/service" className={(({isActive}) => isActive ? "font-bold opacity-100 border-b-2 px-2 rounded-b-md" : " opacity-80")}>Service</NavLink>
                <NavLink to="/our-work" className={(({isActive}) => isActive ? "font-bold opacity-100 border-b-2 px-2 rounded-b-md" : " opacity-80")}>Our Work</NavLink>
                {/* <NavLink to="/about" className={(({isActive}) => isActive ? "font-bold opacity-100 border-b-2 px-2 rounded-b-md" : " opacity-80")}>About Us</NavLink> */}
            </div>
            <div className="xs:block lg:hidden">
            {toggle ? (
                    <ul className='animated-background bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500 right-0 h-dvh w-full fixed content-center space-y-8 sm:space-y-6 top-0 text-center font-medium justify-between ml-10 text-[#fff] z-50'>
                        <li><NavLink to="/" className={(({isActive}) => isActive ? "font-bold opacity-100 border-b-2 px-2 rounded-b-md" : "opacity-80")} >Home</NavLink></li>
                        <li><NavLink to="/service" className={(({isActive}) => isActive ? "font-bold opacity-100 border-b-2 px-2 rounded-b-md" : "opacity-80")}>Service</NavLink></li>
                        <li><NavLink to="/our-work" className={(({isActive}) => isActive ? "font-bold opacity-100 border-b-2 px-2 rounded-b-md" : "opacity-80")}>Our Work</NavLink></li>
                        {/* <li><NavLink to="/about" className={(({isActive}) => isActive ? "font-bold opacity-100 border-b-2 px-2 rounded-b-md" : "opacity-80")}>About Us</NavLink></li> */}
                        <li className="flex justify-center"><AiOutlineClose onClick={closeMenu} size={40} className='text-[#fff] cursor-pointer'/></li>
                    </ul>
                ):(<CgMenuRightAlt onClick={openMenu} size={30} className='text-[#fff]'/>) }
            </div>
        </Section>
    </nav>
    </>   
    )
};
export default Nav