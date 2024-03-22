import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>This is home Compontents</h1>   
            <Outlet></Outlet>  
            <Footer></Footer>       
        </div>
    );
};

export default Home;