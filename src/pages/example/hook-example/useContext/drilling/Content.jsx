const Content = ({isDark}) => {
    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black',
            }}
        >
            <p>테스트님, 좋은 하루 되세요</p>
        </div>
    )
}

export default Content;