import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg fixed-top ">
           <div className="container">
            <NavLogo/>
            <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                <NavMenu/>
            </div>
           </div>
        </nav>
    )
}