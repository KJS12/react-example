const codeViewer = {
description:
`React 내장 Hook (useCallback)
- '함수'을 메모이제이션하여, 매번 새로 만들지 않도록 하며
- 주로 자식 컴포넌트에 함수를 props로 넘길 때 '불필요한 렌더링을 방지'하기 위해 사용한다.

/**
 * const 변수명 = useCallback(arg1, arg2);
 * - arg1 → 호출될 콜백 함수 (반환값은 선택적)
 * - arg2 → 의존성 배열
 */
`,

useCallback:
`import { useCallback } from "react";

// 예시 1) 가독성
const handleClick = useCallback(() => {
    doSomething();
}, [doSomething]);

// 예시 2) 간결함
const value = useCallback(() => doSomething(), [doSomething]);
`,

example:
`import { useCallback, useEffect, useState } from "react";
import Box from "./Box";

const UseCallback = () => {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);
    const [size, setSizes] = useState(100);
    const [isDark, setIsDark] = useState(false);

    const someFunction = useCallback(() => {
        console.log(\`SomeFuc: number: \${number}\`);
        return;
    }, [number]);

    useEffect(() => {
        console.log(\`someFunction이 변경되었습니다.\`);
    }, [someFunction]);

    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor: 'pink',
            width: \`\${size}px\`,
            height: \`\${size}px\`,
        }
    }, [size]);

    return (
        <div>
            <div className="container-line">
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <br/>
                <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
                <br/>
                <button onClick={someFunction}>Call SomeFunc</button>
            </div>
            <div
                className="container-line"
                style={{background: isDark ? 'black' : 'white',}}
            >
                <input
                    type="number"
                    value={size}
                    step={10}
                    onChange={(e) => setSizes(e.target.value)}
                />
                <br/>
                <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
                <Box createBoxStyle={createBoxStyle} />
            </div>
        </div>
    )
}

export default UseCallback;
`,
}

export default codeViewer;