import { useEffect, useState } from "react";
import { CodeViewerContainer } from "../../../components";
import codeViewer from "./codeViewer";

const UseEffect = () => {
    const [showTimer, setShowTimer] = useState(false);

    return (
        <>
            <CodeViewerContainer
                title={"useEffect"}
                files={{
                    "설명": codeViewer.description,
                    "useEffect": codeViewer.useEffect,
                    "Mount": codeViewer.useEffect_mount,
                    "Update": codeViewer.useEffect_update,
                    "UnMount": codeViewer.useEffect_unmount,
                }}
            />
            <div className="container">
                {showTimer && <Timer />}
                <button onClick={() => setShowTimer(!showTimer)}>ToggleTimer</button>
            </div>
        </>
    )
}

const Timer = (props) => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("타이머 도는중...");
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("타이머 종료");
        }
    }, []);

    return (
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요</span>
        </div>
    )
}

export default UseEffect;