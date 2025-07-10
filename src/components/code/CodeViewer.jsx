import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {
    atomDark,       // 어두운 테마, VS Code 느낌
    materialDark,   // 모던한 어두운 테마
    tomorrow,       // 밝은 테마
    dracula,        // 눈에 띄는 어두운 테마
    solarizedlight, // 따뜻한 밝은 테마
} from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeViewer = ({
    language="jsx",
    code,
}) => {
    return (
        <SyntaxHighlighter language={language} style={materialDark}>
            {code}
        </SyntaxHighlighter>
    )
}

export default CodeViewer;