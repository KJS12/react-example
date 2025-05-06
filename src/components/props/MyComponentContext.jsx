import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const MyComponentContext = () => {
    const [list, setList] = useState({
        name: "업무테스트",
        age: 30,
        logout: () => console.log("로그아웃"),
    });

    return (
        <div>
            <UserContext.Provider value={list}>
                <Page01 />
            </UserContext.Provider>
        </div>
    )
}

export default MyComponentContext;

const Page01 = () => {
    return <Page02 />
}

const Page02 = () => {
    return <Page03 />
}

const Page03 = () => {
    const { name, age, logout } = useContext();

    logout();

    return (
        <div>
            <h1>Hello, {name}</h1>
            <h1>Hello, {age}</h1>
        </div>
    )
}



