import { useState } from "react";

const MyComponent = () => {
    const [name, setName] = useState("업무테스트");

    return (
        <div>

            <Page01 name={name} />

        </div>
    )
}

export default MyComponent;

const Page01 = ({ name }) => {
    return <Page02 name={name} />
}

const Page02 = ({ name }) => {
    return <Page03 name={name} />
}

const Page03 = ({ name }) => {
    return (
        <h1>Hello, {name}</h1>
    )
}


