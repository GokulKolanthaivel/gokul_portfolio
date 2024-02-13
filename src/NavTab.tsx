import { Link } from "react-router-dom";
import "./NavTab.css"
import { useState } from "react";

function NavTab(){

    var pathName = document.location.pathname.slice(1);
    const [activeItem, setActiveItem] = useState(pathName==""?"home":pathName);
    const handelclick =(value:any)=>{
        const checkbox = document.getElementById('check') as HTMLInputElement | null;
        if (checkbox) {
          checkbox.checked = false;
        }
        setActiveItem(value);
    }


    return(
        <>
        {/* <nav className="navTab">
            <ul className="navUL">
                <li className="navLI"><Link to={'/'} className="nav-link"> Home </Link></li>
                <li className="navLI"><Link to={'/about'} className="nav-link">About</Link></li>
                <li className="navLI"><Link to={'/experience'} className="nav-link">Experience</Link></li>
                <li className="navLI"><Link to={'/contact'} className="nav-link">Contact</Link></li>
            </ul>
        </nav> */}
        
         <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">Portfolio</label>
                <ul>
                    <li id="home" onClick={()=>handelclick("home")}><Link className={activeItem === "home" ? "navTabActive" : ""}  to={'/'} > Home </Link></li>
                    <li id="about" onClick={()=>handelclick("about")}><Link className={activeItem === "about" ? "navTabActive" : ""} to={'/about'} >About</Link></li>
                    <li id="experience" onClick={()=>handelclick("experience")}><Link  className={activeItem === "experience" ? "navTabActive" : ""} to={'/experience'} >Experience</Link></li>
                    <li id="contact" onClick={()=>handelclick("contact")}><Link className={activeItem === "contact" ? "navTabActive" : ""} to={'/contact'} >Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavTab;