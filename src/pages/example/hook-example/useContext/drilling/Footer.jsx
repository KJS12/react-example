const Footer = ({isDark, setIsDark}) => {
    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div
            className="footer"
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
            }}
        >
            <button onClick={toggleTheme}>Dark Mode</button>
        </div>
    )
}

export default Footer;