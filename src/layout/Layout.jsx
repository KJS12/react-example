import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import { Outlet } from "react-router-dom";
import '../App.css';

const Layout = () => {
    return (
        <div className="App">
            <div className="layout-header">
                <Header />
            </div>

            <Menu />

            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

export default Layout;