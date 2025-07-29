import { useReducer, useState } from "react";
import Student from "./Student";
import { CodeViewerContainer } from "../../../components";
import codeViewer from "./codeViewer";
import { ButtonBox } from "../../../shared/inputs";
import { Highlight } from "../../../shared/component";

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
            <CodeViewerContainer
                title={"useReducer"}
                files={{
                    "설명": codeViewer.description,
                    "useReducer": codeViewer.useReducer,
                    "example": codeViewer.example,
                }}
            />

            <div className="container-line">
                <Highlight title="useReducer 은행에 오신것을 환영합니다."/>
                <p>잔고: {money}원</p>

                <div className="flex flex-row gap-3">
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(parseInt(e.target.value))}
                        step={1000}
                    />
                    <ButtonBox label="예금" className="btn btn-primary" onClick={deposit} />
                    <ButtonBox label="출금" className="btn btn-secondary" onClick={withdraw} />
                </div>
            </div>
            <div className="container-line">
                <Student />
            </div>
        </div>
    )
}

export default UseReducer;