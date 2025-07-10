import { NavLink } from "react-router-dom";
import { targetPage } from "../routes";

const renderMenu = (pages, basePath = "") => {
    return pages.map((page, index) => {
        const fullPath = page.path.startsWith("/")  // (/props, /hook...)
            ? page.path                             // return depth1
            : `${basePath}/${page.path}`;           // return depth1 + children

        const hasChildren = page.children?.length > 0;

        return (
            <li
                key={fullPath + index}
                className={`menu-item ${hasChildren ? "has-children" : ""}`}
            >
                <NavLink
                    to={fullPath}
                    end
                    onClick={(e) => {if (hasChildren) e.preventDefault();}} // 클릭 이벤트 막기
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    {page.label}
                    {hasChildren && "⬇️"}
                </NavLink>
                {
                    hasChildren && (
                        <ul className="submenu">
                            {renderMenu(page.children, fullPath)}
                        </ul>
                    )
                }
            </li>
        );
    });
};
const Menu = () => {
    return (
        <ul className="d-flex scroll-container">
            <div className="scroll-content">
                {renderMenu(targetPage)}
            </div>
        </ul>
    )
}

export default Menu;