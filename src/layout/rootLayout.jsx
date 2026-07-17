import { Outlet } from 'react-router';
import Navbar from "../pages/shared/Navbar/Navbar"
import Footer from '../pages/shared/Footer/Footer';
const rootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default rootLayout;