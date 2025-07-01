const Header = ({isDark}) => {
    return (
        <header
            className="header"
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black',
            }}
        >
            <h1>Welcome 테스트!</h1>
        </header>
    )
}

export default Header;