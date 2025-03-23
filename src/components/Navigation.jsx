import { Link } from "react-router-dom";

function Navigation(){
    return(
        <nav className="app-nav">
            <Link to ="/">Home</Link>
            <Link to ="/submit-astragram"> Submit new Astragram</Link>
        </nav>
    )
}
export default Navigation