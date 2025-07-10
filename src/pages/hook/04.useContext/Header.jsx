import { useThemeContext } from "./context/ThemeContext";
import { useUserContext } from "./context/UserContext";

const Header = () => {
    const {isDark} = useThemeContext();
    const username = useUserContext() || "테스트";
    return (
        <header
            className="header"
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black',
            }}
        >
            <h1>Welcome {username}!</h1>
        </header>
    )
}

export default Header;