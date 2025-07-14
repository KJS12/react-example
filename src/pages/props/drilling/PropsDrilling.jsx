import { useState } from "react";
import Page from "./Page";
import codeViewer from "./codeViewer";
import {CodeViewerContainer} from "../../../components";

const PropsDrilling = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <CodeViewerContainer
                title={"Props Drilling"}
                files={{
                    "설명": codeViewer.description,
                    "propsDrilling": codeViewer.propsDrilling,
                    "Page": codeViewer.childPage,
                    "Header": codeViewer.childHeader,
                    "Content": codeViewer.childContent,
                    "Footer": codeViewer.childFooter,
                }}
            />
            <Page isDark={isDark} setIsDark={setIsDark} />
        </>
    )
}

export default PropsDrilling;