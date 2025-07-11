const codeViewer = {
description:
`React 내장 Hook (useEffect)
/**
 * 컴포넌트가 렌더링 된 후 '비동기적'으로 실행한다.
 *
 * useEffect(arg1, arg2);
 * - arg1 → 실행할 함수 (필수)
 * - arg2 → 의존성 배열 (선택, 생략 가능)
 */
`,
useEffect:
`// 매 렌더링마다 실행한다.
import { useEffect } from "react";
useEffect(() => {
    console.log("컴포넌트가 마운트됨!");
});
`,
useEffect_mount:
`// 컴포넌트가 처음 DOM에 삽입될 때 한 번만 실행한다.
import { useEffect } from "react";
useEffect(() => {
    console.log("컴포넌트가 마운트됨!");
}, []);
`,

useEffect_update:
`// 첫 렌더링시 실행 + 두번째 인자 값이 변경될 때만 실행한다.
import { useState, useEffect } from "react";
const [count, setCount] = useState(0);

useEffect(() => {
    console.log("count 값이 변경됨:", count);
}, [count]);
`,

useEffect_unmount:
`// 컴포넌트가 DOM에서 사라질 때 실행한다.
import { useEffect } from "react";
useEffect(() => {
    console.log("컴포넌트가 마운트됨!");

    return () => {
        console.log("컴포넌트가 언마운트됨!");
    };
}, []);
`,
}

export default codeViewer;