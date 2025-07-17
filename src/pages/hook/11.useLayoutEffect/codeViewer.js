const codeViewer = {
description:
`React 내장 Hook (useLayoutEffect)
- 컴포넌트가 렌더링 된 직후, '화면에 그려지기 전에 동기적'으로 싱행한다.

useLayoutEffect(arg1, arg2);
- arg1 → 실행할 함수 (필수)
- arg2 → 의존성 배열 (선택, 생략 가능)

※※ 실행순서 ※※
1) 컴포넌트 렌더링
2) useLayoutEffect 실행
3) 화면 업데이트
`,

useLayoutEffect:
`// 매 렌더링마다 실행한다.
import { useLayoutEffect } from "react";
useLayoutEffect(() => {
    console.log("컴포넌트가 마운트됨!");
});
`,

useLayoutEffect_mount:
`// 컴포넌트가 처음 DOM에 삽입될 때 한 번만 실행한다.
import { useLayoutEffect } from "react";
useLayoutEffect(() => {
    console.log("컴포넌트가 마운트됨!");
}, []);
`,

useLayoutEffect_update:
`// 첫 렌더링시 실행 + 두번째 인자 값이 변경될 때마다 실행한다.
import { useState, useLayoutEffect } from "react";
const [count, setCount] = useState(0);

useLayoutEffect(() => {
    console.log("count 값이 변경됨:", count);
}, [count]);
`,

useLayoutEffect_unmount:
`// 컴포넌트가 DOM에서 사라질 때 실행한다.
import { useLayoutEffect } from "react";
useLayoutEffect(() => {
    console.log("컴포넌트가 마운트됨!");

    // 컴포넌트가 언마운트 되거나, useEffect가 재실행되기 전에 실행되는 정리 함수로,
    // 불필요한 메모리 사용을 방지하고, 리소스 누수를 막기 위해 사용된다.
    // 예: 이벤트 리너스 제거, 타이머(clearInterval/clearTimeout) 해제, 웹소켓 연결 종료 등
    return () => {
        console.log("컴포넌트가 언마운트됨!");
    };
}, []);
`,

example:
`import { useEffect, useLayoutEffect, useRef, useState } from "react";

// useLayoutEffect(실행할 함수, 의존성 배열)
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
    useLayoutEffect(() => {
        if(numbers.length === 0) {
            return;
        }

        ref.current.scrollTop = ref.current.scrollHeight;
    }, [numbers])

    return (
        <div>
            <div className="container-line">
                <h3>예제소스</h3>
                <button onClick={() => setNumbers([])}>Reset</button>
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
`,
}

export default codeViewer;