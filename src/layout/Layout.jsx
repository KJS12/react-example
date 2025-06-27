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
            <div className="layout-menu">
                <Menu />
            </div>
            <div className="layout-content">
                <Outlet />
            </div>
            {/* <div className="layout-footer">
                <Footer />
            </div> */}
        </div>
    )
}

export default Layout;