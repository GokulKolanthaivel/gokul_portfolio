import { Link } from "react-router-dom";
import "./NavTab.css"
import { useEffect } from "react";

function NavTab(){


    const handelclick =()=>{
        const checkbox = document.getElementById('check') as HTMLInputElement | null;
        if (checkbox) {
          checkbox.checked = false;
        }
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
                    <li onClick={handelclick}><Link to={'/'} > Home </Link></li>
                    <li onClick={handelclick}><Link to={'/about'} >About</Link></li>
                    <li onClick={handelclick}><Link to={'/experience'} >Experience</Link></li>
                    <li onClick={handelclick}><Link to={'/contact'} >Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavTab;