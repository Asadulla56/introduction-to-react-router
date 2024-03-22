import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav>
                {/* <small>My Website</small> */}
                <Link to ='/'>Home</Link>
                <NavLink to ='/users' > users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <Link to ='/about'>About</Link>
                <Link to ='/contact'>Contact Us</Link>
            </nav>
        </div>
    );
};

export default Navbar;