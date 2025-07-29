import { useState } from "react";
import CodeViewer from "./CodeViewer";
import { ButtonBox } from "../../shared/inputs";
import { Highlight } from "../../shared/component";

const CodeViewerContainer = ({title, files}) => {
    const fileNames = Object.keys(files);
    const [activeTab, setActiveTab] = useState(fileNames[0]);

    return (
        <>
            {title && <Highlight size="4xl" bold title={title}/>}
             {/* 탭 버튼 */}
            <div className="code-tabs">
                {fileNames.map((filename) => (
                    <ButtonBox
                        key={filename}
                        className={`tab-btn ${activeTab === filename ? "active" : ""}`}
                        onClick={() => setActiveTab(filename)}
                        label={filename}
                    />
                ))}
            </div>

            {/* 코드 리뷰 */}
            <div className="code-viewer-container">
                <CodeViewer code={files[activeTab]}/>
            </div>
        </>
    )
}

export default CodeViewerContainer;