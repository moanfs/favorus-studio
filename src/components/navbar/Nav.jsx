import NavLogo from "./NavLogo"
import NavLink from "./NavLink"

const Nav = () =>{
    return(     
    <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
            <NavLogo/>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 text-center mb-lg-0">
                    <NavLink text="Home" url="/"/>
                    <NavLink text="Service" url="/service"/>
                    <NavLink text="Our Work" url="/our-work"/>
                    <NavLink text="About Us" url="/about"/>
                    <NavLink text="Blog" url="/blog"/>
                </ul>
            </div>
        </div>
    </nav>
    )
};
export default Nav