const codeViewer = {
// [CodeViewer] Home
home:
`const Home = () => {
    return (
        <div>Home 입니다.</div>
    )
}

export default Home;
`,

// [CodeViewer] Header
header:
`import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <h4>
                <Link to="/" className="line-over t-white">
                    React Example
                </Link>
            </h4>
        </div>
    )
};

export default Header;
`,

// [CodeViewer] Layout
layout:
`import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import '../css/App.css';
import '../css/menu.css';
import '../css/style.css';
import '../css/layout.css';

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
`,

// [CodeViewer] Footer
footer:
`const Footer = () => {
    return (
        <footer>Footer</footer>
    )
}

export default Footer;
`,
}

export default codeViewer;