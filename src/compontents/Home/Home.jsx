import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Home = () => {
    const navigetion = useNavigation();
    const location = useLocation();
    console.log(location)

    return (
        <div>
            <Navbar></Navbar>
            {
                navigetion.state ==='loading' ?
                <p>Loadding...</p>:
                <Outlet></Outlet> 

            }
            {/* <h1>This is home Compontents</h1>    */}
             
            <Footer></Footer>       
        </div>
    );
};

export default Home;