import { Highlight } from "../../../shared/component";
import { useThemeContext } from "./context/ThemeContext";
import { useUserContext } from "./context/UserContext";

const Header = () => {
    const {isDark} = useThemeContext();
    const username = useUserContext() || "테스트";
    return (
        <header className={`header ${isDark ? "bg-black text-white" : "bg-gray-300 text-black"}`}>
            <Highlight title={`Welcome ${username} !`}/>
        </header>
    )
}

export default Header;