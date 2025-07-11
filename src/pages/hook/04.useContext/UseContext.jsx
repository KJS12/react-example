import { useState } from "react";
import Page from "./Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";
import { CodeViewerContainer } from "../../../components";
import codeViewer from "./codeViewer";

/**
 * 내장 Context API 전역변수
 * @description
 *  다양한 레벨에 있는 많은 컴포넌트에 전역적인 데이터를 전달하기 위함이다.
 * @returns
 */
const UseContext = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <CodeViewerContainer
                files={{
                    "설명": codeViewer.description,
                    "themeContext": codeViewer.themeContext,
                    "userContext": codeViewer.userContext,
                    "useContext": codeViewer.useContext,
                    "page": codeViewer.page,
                    "header": codeViewer.header,
                    "content": codeViewer.content,
                    "footer": codeViewer.footer,
                }}
            />
            <UserContext.Provider value={"사용자"}>
                <ThemeContext.Provider value={{isDark, setIsDark}}>
                    <Page />
                </ThemeContext.Provider>
            </UserContext.Provider>
        </>
    )
}

export default UseContext;