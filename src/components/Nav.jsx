import { Link } from "react-router-dom";

function Nav () {
    return (
        <nav>
            <Link to='/'>Home </Link>
            <Link to='/articles-list'>Articles </Link>
        </nav>
    )
}

export default Nav;