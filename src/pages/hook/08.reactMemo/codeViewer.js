const codeViewer = {
description:
`React 내장 Hook (React.memo)
- 컴포넌트가 동일한 props를 받을 때, 불필요한 리렌더링을 방지하기 위해 사용된다.
- '원시 타입 (숫자, 문자열 등)은' 값 자체로 비교되기 때문에, 'React.memo만 사용해도 렌더링 방지가 가능'하지만,
- '참조 타입 (객체, 함수 등)은 메모리 주소를 기준으로 비교되므로'
   매 렌더링마다 새로운 주소가 생성되면 React.memo가 다른 props라고 판단하여 리렌더링을 발생한다.
- 이를 방지하기 위해 'useMemo' 와 'useCallback'을 함께 사용해야 한다.

React.memo + useMemo
→ 자식에게 전달하는 '함수'가 자주 생성되는 경우 사용한다.

React.memo + useCallback
→ 자식에게 전달하는 '객체/배열'이 자주 생성되는 경우 사용한다.
`,

reactMemo_1:
`import { useCallback, useMemo, useState } from "react";
import ReactMemoChild from "./ReactMemoChild";

const ReactMemo = () => {
    return (
        <ReactMemoParent />
    )
}

/**
 * React.memo 예제소스
 * @returns
 */
export const ReactMemoParent = () => {
    const [parentAge, setParentAge] = useState(0);
    const [childAge, setChildAge] = useState(0);

    const incrementParentAge = () => {
        setParentAge(parentAge + 1);
    };

    const incrementChildAge = () => {
        setChildAge(childAge + 1);
    };

    console.log("👩‍👧‍👦[React.memo] 부모 컴포넌트가 렌더링 되었어요")
    return (
        <div>
            <div style={{border: '2px solid navy', padding: '10px'}}>
                <h3>React.memo</h3>
                <h1>👩‍👧‍👦부모</h1>
                <p>age: {parentAge}</p>
                <button onClick={incrementParentAge}>부모 나이 증가</button>
                <button onClick={incrementChildAge}>자녀 나이 증가</button>
                <ReactMemoChild name={"홍길동"} age={childAge} />
            </div>
        </div>
    )
}

export default ReactMemo;

// 하위 컴포넌트
import React from "react";

const ReactMemoChild = ({name, age}) => {
    console.log("🙋‍♂️[React.memo] 자식 컴포넌트도 렌더링 되었네요");
    return (
        <div style={{border: '2px solid powderblue', padding: '10px'}}>
            <h3>🙋‍♂️자녀</h3>
            <p>이름: {name}</p>
            <p>나이: {age}</p>
        </div>
    )
}

export default React.memo(ReactMemoChild);
`,

reactMemo_2:
`import { useCallback, useMemo, useState } from "react";
import ReactMemoAndUseMemoChild from "./ReactMemoAndUseMemoChild";

const ReactMemo = () => {
    return (
        <ReactMemoAndUseMemoParent />
    )
}

/**
 * React.memo + useMemo 예제소스
 * @returns
 */
export const ReactMemoAndUseMemoParent = () => {
    const [parentAge, setParentAge] = useState(0);

    const incrementParentAge = () => {
        setParentAge(parentAge + 1);
    };

    // Object는 String, number와 같이 원시타입이 아닌 메모리 주소가 저장되기 때문에
    // 렌더링 될때마다 변수를 초기화 및 재 할당을 하기 때문에 변수의 주소가 달라집니다.
    const name = useMemo(() => {
        return {
            lastName: "홍",
            firstName: "길동",
        };
    }, []);

    console.log("👩‍👧‍👦[React.memo + useMemo] 부모 컴포넌트가 렌더링 되었어요")
    return (
        <div>
            <div style={{border: '2px solid navy', padding: '10px'}}>
                <h3>React.memo + useMemo</h3>
                <h1>👩‍👧‍👦부모</h1>
                <p>age: {parentAge}</p>
                <button onClick={incrementParentAge}>부모 나이 증가</button>
                <ReactMemoAndUseMemoChild name={name}/>
            </div>
        </div>
    )
}

export default ReactMemo;

// 하위 컴포넌트
import React from "react";

const ReactMemoAndUseMemoChild = ({name}) => {
    console.log("🙋‍♂️[React.memo + useMemo] 자식 컴포넌트도 렌더링 되었네요");
    return (
        <div style={{border: '2px solid powderblue', padding: '10px'}}>
            <h3>🙋‍♂️자녀</h3>
            <p>성: {name.lastName}</p>
            <p>이름: {name.firstName}</p>
        </div>
    )
}

export default React.memo(ReactMemoAndUseMemoChild);
`,

reactMemo_3:
`import { useCallback, useMemo, useState } from "react";
import ReactMemoAndUseCallbackChild from "./ReactMemoAndUseCallbackChild";

const ReactMemo = () => {
    return (
        <ReactMemoAndUseCallbackParent />
    )
}

/**
 * React.memo + useCallback 예제소스
 * @returns
 */
export const ReactMemoAndUseCallbackParent = () => {
    const [parentAge, setParentAge] = useState(0);

    const incrementParentAge = () => {
        setParentAge(parentAge + 1);
    };

    const tellMe = useCallback(() => {
        console.log("🙋‍♂️[React.memo + useCallback] 나 불렀어?");
    }, []);


    console.log("👩‍👧‍👦[React.memo + useCallback] 부모 컴포넌트가 렌더링 되었어요")
    return (
        <div>
            <div style={{border: '2px solid navy', padding: '10px'}}>
                <h3>React.memo + useMemo</h3>
                <h1>👩‍👧‍👦부모</h1>
                <p>age: {parentAge}</p>
                <button onClick={incrementParentAge}>부모 나이 증가</button>
                <ReactMemoAndUseCallbackChild name={"홍길동"} tellMe={tellMe} />
            </div>
        </div>
    )
}

export default ReactMemo;

// 하위 컴포넌트
import React from "react";

const ReactMemoAndUseCallbackChild = ({name, tellMe}) => {
    console.log("🙋‍♂️[React.memo + useCallback] 자식 컴포넌트도 렌더링 되었네요");
    return (
        <div style={{border: '2px solid powderblue', padding: '10px'}}>
            <h3>🙋‍♂️자녀</h3>
            <p>이름: {name}</p>
            <button onClick={tellMe}>버튼</button>
        </div>
    )
}

export default React.memo(ReactMemoAndUseCallbackChild);
`,
}

export default codeViewer;