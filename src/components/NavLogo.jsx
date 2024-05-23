// import { useState } from "react"
export default function NavLogo(){
    // const [isActive, setIsActive] = useState(false);
    // const toggleMenu = () => {
    //     setIsActive(!isActive);
    //   };
    return(
        <>
        <a href="" className="navbar-brand">
            <img src="" alt="" />Logo
        </a>
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
            {/* {isActive ? <i className="bi bi-x-lg"></i> :  <span className="navbar-toggler-icon "></span>} */}
        </button>
        </>
    )
}