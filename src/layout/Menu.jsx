import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
        </ul>
    )
}

export default Menu;