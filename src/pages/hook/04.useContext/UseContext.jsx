import { useState } from "react";
import Page from "./Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

/**
 * 내장 Context API 전역변수
 * @description
 *  다양한 레벨에 있는 많은 컴포넌트에 전역적인 데이터를 전달하기 위함이다.
 * @returns
 */
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