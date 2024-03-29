import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";


function AppRouter(){
    return (
        <>
            <Routes>
                <Route  path="/" Component={Home} />
                <Route  path="/home" Component={Home} />
                <Route  path="/about" Component={About} />
                <Route  path="/experience" Component={Experience} />
                <Route  path="/contact" Component={Contact} />
            </Routes>
        </>
    )

}

export default AppRouter;