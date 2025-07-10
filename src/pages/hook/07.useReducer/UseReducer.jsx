import { useReducer, useState } from "react";
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