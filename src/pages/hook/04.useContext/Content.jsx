import { useThemeContext } from "./context/ThemeContext";
import { useUserContext } from "./context/UserContext";

const Content = () => {
    const {isDark} = useThemeContext();
    const username = useUserContext() || "테스트";
    return (
        <div className={`content ${isDark ? "bg-black text-white" : "bg-gray-300 text-black"}`} >
            <p>{username}님, 좋은 하루 되세요</p>
        </div>
    )
}

export default Content;