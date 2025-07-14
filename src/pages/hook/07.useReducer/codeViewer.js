const codeViewer = {
description:
`React 내장 Hook (useReducer)
- '복잡한 상태 관리나 여러 상태가 얽혀 있을 때' 사용한다.

상태 변경 로직을 reducer 함수로 분리해 관리한다.

const [state, dispatch] = useReducer(arg1, arg2);
- state     → 현재 상태값
- dispatch  → 상태를 변경하기 위한 함수
- arg1      → 상태를 업데이트 하는 함수
- arg2      → 상태의 초기값
`,

useReducer:
`import React, { useReducer } from 'react';

// 상태를 업데이트 하는 함수
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const Counter = () => {
    // const [현재 상태값, 액션함수] = useReducer(상태 업데이트 함수, 초기값)
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <p>카운트: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>증가</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>감소</button>
        </div>
    );
}

export default Counter;
`,

example:
`import { useReducer, useState } from "react";
import Student from "./Student";

const ACTION_TYPE = {
    deposit: 'deposit',
    withdraw: 'withdraw',
}

/**
 * @description
 * reducer - state를 업데이트 하는 역할
 * dispatch - state 업데이트를 위한 요구
 * action - 요구의 내용
 * @returns
 */
const reducer = (state, action) => {
    console.log('reducer가 일을 합니다!', state, action)
    switch (action.type) {
        case ACTION_TYPE.deposit:
            return state + action.payload;
        case ACTION_TYPE.withdraw:
            return state - action.payload;
        default:
            return state;
    }
}

const UseReducer = () => {
    const [number, setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0);

    const deposit = () => {
        dispatch({
            type: ACTION_TYPE.deposit,
            payload: number,
        });
    }

    const withdraw = () => {
        dispatch({
            type: ACTION_TYPE.withdraw,
            payload: number,
        });
    }

    return (
        <div>
            <div className="container-line">
                <h2>useReducer 은행에 오신것을 환영합니다.</h2>
                <p>잔고: {money}원</p>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value))}
                    step={1000}
                />
                <button onClick={deposit}>예금</button>
                <button onClick={withdraw}>출금</button>
            </div>
            <div className="container-line">
                <Student />
            </div>
        </div>
    )
}

export default UseReducer;
`,
}

export default codeViewer;