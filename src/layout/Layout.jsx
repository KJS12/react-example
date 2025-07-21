import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

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
            <div className="layout-footer">
                <Footer />
            </div>
        </div>
    )
}

export default Layout;