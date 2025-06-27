import { Link, NavLink } from "react-router-dom";
import { targetPage } from "../routes";

const Menu = () => {
    return (
        <ul className="d-flex scroll-container">
            <div className="scroll-content">
                {
                    targetPage.map((page, index) => (
                        <li key={index}>
                            <NavLink
                                to={page.path}
                                end
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                {page.label}
                            </NavLink>
                        </li>
                    ))
                }
            </div>
        </ul>
    )
}

export default Menu;