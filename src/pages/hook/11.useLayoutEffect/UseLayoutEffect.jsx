import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { CodeViewerContainer } from "../../../components";
import codeViewer from "./codeViewer";
import { ButtonBox } from "../../../shared/inputs";

// useLayoutEffect(실행할 함수, 의존성배열)
const UseLayoutEffect = () => {
    const [numbers, setNumbers] = useState([]);
    const ref = useRef(null);

    // useEffect -> 컴포넌트가 화면이 '그려진 이후에' 실행
    // 비동기적으로 수행된다
    useEffect(() => {
        const nums = getNumbers();
        setNumbers(nums);
    }, [])

    // useLayoutEffect -> 컴포넌트가 화면이 '그려지기 이전에' 실행
    // 동기적으로 수행된다
    // useEffect(() => {
    useLayoutEffect(() => {
        if(numbers.length === 0) {
            return;
        }

        ref.current.scrollTop = ref.current.scrollHeight;
    }, [numbers])

    return (
        <div>
            <CodeViewerContainer
                title={"useLayoutEffect"}
                files={{
                    "설명": codeViewer.description,
                    "useLayoutEffect": codeViewer.useLayoutEffect,
                    "Mount": codeViewer.useLayoutEffect_mount,
                    "Update": codeViewer.useLayoutEffect_update,
                    "UnMount": codeViewer.useLayoutEffect_unmount,
                    "example": codeViewer.example,
                }}
            />
            <div className="container-line">
                <h3>예제소스</h3>
                <ButtonBox label="Reset" onClick={() => setNumbers([])} />
                <div
                    ref={ref}
                    style={{
                        height: '300px',
                        border: '1px solid blue',
                        overflow: 'scroll'
                    }}
                >
                    {numbers.map((number, idx) => (
                        <p key={idx}>{number}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

const getNumbers = () => {
    return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
}

export default UseLayoutEffect;