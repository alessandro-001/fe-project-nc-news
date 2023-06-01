import { Link } from "react-router-dom";

/* NAV-BAR */

function Nav () {
    return (
        <nav>
            <Link to='/' className="nav-links">Home </Link>
            <Link to='/articlesList' className="nav-links">Articles </Link>
        </nav>
    )
}

export default Nav;