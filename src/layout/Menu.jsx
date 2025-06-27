import { Link } from "react-router-dom";
import { targetPage } from "../routes";

const Menu = () => {
    return (
        <ul className="d-flex scroll-container">
            {
                targetPage.map((page, index) => (
                    <li key={index}>
                        <Link to={page.path}>{page.label}</Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Menu;