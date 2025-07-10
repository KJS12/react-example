import { useThemeContext } from "./context/ThemeContext";
import { useUserContext } from "./context/UserContext";

const Content = () => {
    const {isDark} = useThemeContext();
    const username = useUserContext() || "테스트";
    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black',
            }}
        >
            <p>{username}님, 좋은 하루 되세요</p>
        </div>
    )
}

export default Content;