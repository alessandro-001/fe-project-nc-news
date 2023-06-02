import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

/* NAV-BAR */

function Nav () {
    const {user} = useContext(UserContext)

    return (
        <>
        <nav>
            <Link to='/' className="nav-links">Home </Link>
            <Link to='/articlesList' className="nav-links">Articles </Link>
            <span className="nav-links">{user.username}</span>
        </nav>
        </>
    )
}

export default Nav;