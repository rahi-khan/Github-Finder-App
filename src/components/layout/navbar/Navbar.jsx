import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="navbar bg-primary">
        <h1>
            <Link to="/">
                <i className="fab fa-github"></i> Github Finder App
            </Link>
        </h1>

        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;
