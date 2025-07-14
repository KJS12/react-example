import { useEffect, useRef, useState } from "react";
import { CodeViewerContainer } from "../../../components";
import codeViewer from "./codeViewer";

const UseRef = () => {
    const [count, setCount] = useState(1);
    const [renderer, setRenderer] = useState(0);
    const countRef = useRef(0);
    let countVar = 0;
    const rendererCount = useRef(1);
    const inputRef = useRef();

    // 첫 렌더링시에만 실행
    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    }, []);

    const login = () => {
        alert(`환영합니다. ${inputRef.current.value}`);
        inputRef.current.focus();
    }

    useEffect(() => {
        rendererCount.current = rendererCount.current + 1;
        console.log("렌더링 수: ", rendererCount.current);
    });

    const doRenderer = () =>{
        setRenderer(renderer+1);
    }

    const increaseRef = () => {
        countRef.current = countRef.current + 1;
        console.log("Ref", countRef.current);
    }

    const increaseVar = () => {
        countVar++;
        console.log("Var", countVar)
    }

    const printResults = () => {
        console.log(`ref: ${countRef.current}, var: ${countVar}`)
    }

    return (
        <>
            <CodeViewerContainer
                title={"useRef"}
                files={{
                    "설명": codeViewer.description,
                    "useRef": codeViewer.useRef,
                    "example": codeViewer.useRef_example,
                }}
            />
            <div className="container-line">
                <p>Ref: {countRef.current}</p>
                <p>Var: {countVar}</p>
                <div className="d-flex gap">
                    <button onClick={printResults}>출력</button>
                    <button onClick={doRenderer}>렌더링</button>
                    <button onClick={increaseRef}>Ref 올려</button>
                    <button onClick={increaseVar}>Var 올려</button>
                </div>
            </div>
            <div className="container-line">
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Count 올려</button>
            </div>
            <div className="d-flex gap container-line">
                <input ref={inputRef} type="text" placeholder="username" />
                <button onClick={login}>로그인</button>
            </div>
        </>
    )
}

export default UseRef;