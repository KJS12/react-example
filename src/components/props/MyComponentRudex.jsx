import { useSelector } from "react-redux";

const MyComponentRudex = () => {
    return (
        <div>
            <Page01 />
        </div>
    )
}

export default MyComponentRudex;

const Page01 = () => {
    return <Page02 />
}

const Page02 = () => {
    return <Page03 />
}

const Page03 = () => {
    const name = useSelector((state) => state.name);
    return (
        <h1>Hello, {name}</h1>
    )
}


