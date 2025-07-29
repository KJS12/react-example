import { ButtonBox } from "../../../shared/inputs";
import { useThemeContext } from "./context/ThemeContext";

const Footer = () => {
    const {isDark, setIsDark} = useThemeContext();
    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div className={`footer ${isDark ? "bg-black" : "bg-gray-300"}`} >
            <ButtonBox label="Dark Mode" onClick={toggleTheme} />
        </div>
    )
}

export default Footer;