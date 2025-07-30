import { useEffect, useRef, useState } from "react";
import { CodeViewerContainer } from "../../../components";
import codeViewer from "./codeViewer";
import { ButtonBox } from "../../../shared/inputs";
import { GridLayout } from "../../../shared/component";

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

    const handleCountPlus = () => {
        setCount(count + 1);
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
                <GridLayout>
                    <ButtonBox label="출력" onClick={printResults}/>
                    <ButtonBox label="렌더링" onClick={doRenderer}/>
                    <ButtonBox label="Ref 올려" onClick={increaseRef}/>
                    <ButtonBox label="Var 올려" onClick={increaseVar}/>
                </GridLayout>
            </div>
            <div className="container-line">
                <p>Count: {count}</p>
                <ButtonBox label="Count 올려" onClick={handleCountPlus} />
            </div>
            <div className="flex flex-row grp-2 container-line">
                <input ref={inputRef} type="text" placeholder="username" />
                <ButtonBox label="로그인" className="btn btn-secondary" onClick={login} />
            </div>
        </>
    )
}

export default UseRef;