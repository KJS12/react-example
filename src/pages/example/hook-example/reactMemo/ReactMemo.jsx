import { useCallback, useMemo, useState } from "react";
import ReactMemoChild from "./ReactMemoChild";
import ReactMemoAndUseMemoChild from "./ReactMemoAndUseMemoChild";
import ReactMemoAndUseCallbackChild from "./ReactMemoAndUseCallbackChild";

/**
 *
 * React.memo
 * 오직 Props 변화에만 의존하는 최적화 방법
 *
 * @description
 * React.memo 주의사항
 * 1) 컴포넌트가 같은 Props로 자주 렌더링 될때
 * 2) 컴포넌트가 렌더링이 될때마다 복잡한 로직을 처리해야 할때
 * @returns
 */
const ReactMemo = () => {
    return (
        <div>
            {/* React.memo */}
            <ReactMemoParent />

            {/* React.memo + useMemo */}
            <ReactMemoAndUseMemoParent />

            {/* React.memo + useCallback */}
            <ReactMemoAndUseCallbackParent />
        </div>
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