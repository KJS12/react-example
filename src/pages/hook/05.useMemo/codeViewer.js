const codeViewer = {
description:
`React 내장 Hook (useMemo)
- '값'을 메모이제이션하여, 계산 비용이 높은 작업을 반복하지 않도록 하며,
- 의존성이 바뀌지 않으면 이전 결과를 재사용한다.

/**
 * const 변수명 = useMemo(arg1, arg2);
 * - arg1 → 반드시 값을 리턴하는 함수
 * - arg2 → 의존성 배열
 */
`,

useMemo:
`import { useMemo } from "react";

※ 아래 문법은 기능적 차이는 없으며, 개발자의 취향이나 상황에 따라 사용하면 된다.

// 예시 1) 가독성
const value = useMemo(() => {
    // 복잡한 계산
    return computeSomething();
}, [computeSomething]);

// 예시 2) 간결함
const value = useMemo(() => computeSomething(), [computeSomething]);
`,

example:
`import { useEffect, useMemo, useState } from "react";

const hardCalculate = (number) => {
    console.log('어려운 계산!');
    for (let i = 0; i < 99999999999; i++) {
        return number + 10000;
    }
}

const easyCalculate = (number) => {
    console.log('쉬운 계산!');
    return number + 1;
}

const UseMemo = () => {
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    const hardSum = useMemo(() => {
        return hardCalculate(hardNumber);
    }, [hardNumber]);

    const easySum = useMemo(() => {
        return easyCalculate(easyNumber)
    }, [easyNumber]);

    const location = useMemo(() => {
        return {
            country: isKorea ? '한국' : '외국',
        }
    }, [isKorea]);

    useEffect(() => {
        console.log('useEffect 호출');
    }, [location]);

    return (
        <div>
            <div className="container-line">
                <h1>어려운 계산기</h1>
                <input
                    type="number"
                    value={hardNumber}
                    onChange={(e) => setHardNumber(parseInt(e.target.value))}
                />
                <span>+ 10000 = {hardSum}</span>

                <h1>쉬운 계산기</h1>
                <input
                    type="number"
                    value={easyNumber}
                    onChange={(e) => setEasyNumber(parseInt(e.target.value))}
                />
                <span>+ 1 = {easySum}</span>
            </div>
            <div className="container-line">
                <h2>하루에 몇끼 먹어요?</h2>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <hr />
                <h2>어느 나라에 있어요?</h2>
                <p>나라: {location.country}</p>
                <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
            </div>
        </div>
    )
}

export default UseMemo;
`,
}

export default codeViewer;