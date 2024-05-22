import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg">
           <div className="container">
            <NavLogo/>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <NavMenu/>
            </div>
           </div>
        </nav>
    )
}