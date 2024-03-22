import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav>
                {/* <small>My Website</small> */}
                <Link to ='/'>Home</Link>
                <Link to ='/users'> users</Link>
                <Link to ='/about'>About</Link>
                <Link to ='/contact'>Contact Us</Link>
            </nav>
        </div>
    );
};

export default Navbar;