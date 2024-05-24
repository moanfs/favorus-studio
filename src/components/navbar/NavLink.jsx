const NavLink = ({text, url}) =>{
    return(
      <li className="nav-item">
        <a href={url} className="nav-link">{text}</a>
      </li>
    )
}

export default NavLink