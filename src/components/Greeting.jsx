const styles = {
    greeting: {
        color: "royalblue",
        fontSize: "24px",
        fontWeight: "bold",
        padding: "10px",
    },
};

const Greeting = ({name}) => {
    return (
        <h1 style={styles.greeting}>
            Hello, {name}님
        </h1>
    )
}

export default Greeting;


