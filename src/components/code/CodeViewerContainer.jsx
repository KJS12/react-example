import { useState } from "react";
import CodeViewer from "./CodeViewer";

const CodeViewerContainer = ({files}) => {
    const fileNames = Object.keys(files);
    const [activeTab, setActiveTab] = useState(fileNames[0]);

    return (
        <>
             {/* 탭 버튼 */}
            <div className="code-tabs">
                {fileNames.map((filename) => (
                    <button
                        key={filename}
                        className={`tab-btn ${activeTab === filename ? "active" : ""}`}
                        onClick={() => setActiveTab(filename)}
                    >
                        {filename}
                    </button>
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