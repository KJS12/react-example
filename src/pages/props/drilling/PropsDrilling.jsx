import { useState } from "react";
import Page from "./Page";
import codeViewer from "./codeViewer";
import {CodeViewer, CodeViewerContainer} from "../../../components";

/**
 * 내장 Context API 전역변수
 * @description
 *  다양한 레벨에 있는 많은 컴포넌트에 전역적인 데이터를 전달하기 위함이다.
 * @returns
 */
const PropsDrilling = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <Page
                isDark={isDark}
                setIsDark={setIsDark}
            />
            <CodeViewerContainer>
                <CodeViewer code={codeViewer.propsDrilling}/>
                <CodeViewer code={codeViewer.childrenPage}/>
                <CodeViewer code={codeViewer.childrenHeader}/>
                <CodeViewer code={codeViewer.childrenContent}/>
                <CodeViewer code={codeViewer.childrenFooter}/>
            </CodeViewerContainer>
        </>
    )
}

export default PropsDrilling;