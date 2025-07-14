const codeViewer = {
description:
`React 내장 Hook (useContext)
- React에서 전역처럼 상태(State)나 함수(Function)를 공유할 수 있게 해주는 Hook으로,

하위 컴포넌트들이 부모에서 props로 하나하나 내려받지 않고 Context로 묶인 값을 직접 사용할 수 있게 해준다.
※ 전역 상태(Context) 공유
※ 다양한 레벨에 있는 많은 컴포넌트에 전역적인 데이터를 전달하기 위함.
`,

themeContext:
`import { createContext, useContext } from "react";

export const ThemeContext = createContext(null);
export const useThemeContext = () => useContext(ThemeContext);
`,

userContext:
`import { createContext, useContext } from "react";

export const UserContext = createContext(null);
export const useUserContext = () => useContext(UserContext);
`,

useContext:
`import { useState } from "react";
import Page from "./Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

const UseContext = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <UserContext.Provider value={"사용자"}>
            <ThemeContext.Provider value={{isDark, setIsDark}}>
                <Page />
            </ThemeContext.Provider>
        </UserContext.Provider>
    )
}

export default UseContext;
`,

page:
`import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Page = () => {
    return (
        <div className="page">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Page;
`,

header:
`import { useThemeContext } from "./context/ThemeContext";
import { useUserContext } from "./context/UserContext";

const Header = () => {
    const {isDark} = useThemeContext();
    const username = useUserContext() || "테스트";
    return (
        <header
            className="header"
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black',
            }}
        >
            <h1>Welcome {username}!</h1>
        </header>
    )
}

export default Header;
`,

content:
`import { useThemeContext } from "./context/ThemeContext";
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
`,

footer:
`import { useThemeContext } from "./context/ThemeContext";

const Footer = () => {
    const {isDark, setIsDark} = useThemeContext();
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
`,

}

export default codeViewer;