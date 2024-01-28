import { Link } from "react-router-dom";
import "./NavTab.css"

function NavTab(){
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
                    <li><Link to={'/'} > Home </Link></li>
                    <li><Link to={'/about'} >About</Link></li>
                    <li><Link to={'/experience'} >Experience</Link></li>
                    <li><Link to={'/contact'} >Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavTab;