import { useEffect, useReducer, useRef } from "react";
import { Form } from "react-router-dom";
import { JUtilsValid } from "../../../utils/utils";
import { useInput } from "../../../hooks";
import { ButtonBox, InputBox, RadioBox } from "../../../shared/inputs";
import { inputValue, REPAYMENT_TYPE, repaymentList } from "./data";
import { reducer } from "./reducer";
import { Highlight } from "../../../shared/component";

/**
 * 할일 관리
 * @returns
 */
const TodoList = () => {
    const {input, handleChange, resetInput} = useInput(inputValue);
    const inputRefs = useRef({});
    const [todoList, dispatch] = useReducer(reducer, {list: []});

    const validation = () => {
        for (let key of Object.keys(inputValue)) {
            // console.log(key)
            const input = inputRefs.current[key];
            if(!input) continue;

            const value = input.value;
            if(JUtilsValid.isEmpty(value)) {
                alert(`${key} 항목을 입력/선택해주세요`);
                input.focus();
                return false;
            }
        }
        return true;
    }

    // 등록 이벤트
    const handleSubmit = (e) => {
        // 기본동작 막기
        e.preventDefault();

        // 유효성 검사
        if(!validation()) return;

        // 등록하기
        processAdd(input);

        // 입력 데이터 초기화
        resetInput();

        inputRefs.current['title'].value = null;
        inputRefs.current['content'].value = null;
    }

    // 추가하기
    const processAdd = (data) =>  dispatch({type: 'add', payload: data});
    // 수정하기
    const processUpd = (data) => dispatch({type: 'update', payload: data});
    // 삭제하기
    const processDel = (data) => dispatch({type: 'delete', payload: data});

    useEffect(() => {
        console.log(inputRefs)
    },[inputRefs])

    return (
        <div>
            <Highlight title="할일 등록"/>
            <Form onSubmit={handleSubmit} className="my-5">
                <InputBox
                    label="제목"
                    ref={(el) => (inputRefs.current['title'] = el)}
                    name="title"
                    value={input.title}
                    onChange={handleChange}
                />
                <InputBox
                    label="내용"
                    ref={(el) => (inputRefs.current['content'] = el)}
                    name="content"
                    value={input.content}
                    onChange={handleChange}
                />
                <div className="select" style={{display: "flex", gap: '5px'}}>
                    <span className="strong mr-5">약관선택 1</span>
                    <RadioBox
                        list={[
                            {name: 'agree1', value: 'Y', label: '예'},
                            {name: 'agree1', value: 'N', label: '아니오'},
                        ]}
                        onChange={handleChange}
                        ref={(el) => (inputRefs.current['agree1'] = el)}
                    />
                </div>
                <div className="select" style={{display: "flex", gap: '5px'}}>
                    <span className="strong mr-5">약관선택 2</span>
                    <RadioBox
                        list={[
                            {name: 'agree2', value: 'Y', label: '예'},
                            {name: 'agree2', value: 'N', label: '아니오'},
                        ]}
                        onChange={handleChange}
                        ref={(el) => (inputRefs.current['agree2'] = el)}
                    />
                </div>
                <div className="select" style={{display: "flex", gap: '5px'}}>
                    <span className="strong mr-5">약관선택 3</span>
                    <RadioBox
                        list={[
                            {name: 'agree3', value: 'Y', label: '예'},
                            {name: 'agree3', value: 'N', label: '아니오'},
                        ]}
                        onChange={handleChange}
                        ref={(el) => (inputRefs.current['agree3'] = el)}
                    />
                </div>
                <div className="select" style={{display: "flex", gap: '5px'}}>
                    <span className="strong mr-5">항목선택</span>
                    <RadioBox
                        list={repaymentList('chk1')}
                        onChange={handleChange}
                        ref={(el) => (inputRefs.current['chk1'] = el)}
                    />
                </div>
                {input.chk1 &&
                    (
                        <div>
                            {REPAYMENT_TYPE[input.chk1]}
                        </div>
                    )
                }
                <ButtonBox type="submit" label="등록" />
            </Form>
            <div>
                <table style={{borderBlock: '1px solid gray', width: '500px', textAlign: 'center'}}>
                    <thead>
                        <tr>
                            <th>제목</th>
                            <th>내용</th>
                            <th>약관1</th>
                            <th>약관2</th>
                            <th>약관3</th>
                            <th>체크1</th>
                            <th>event</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoList.list.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.title}</td>
                                <td>{item.content}</td>
                                <td>{item.agree1}</td>
                                <td>{item.agree2}</td>
                                <td>{item.agree3}</td>
                                <td>{item.chk1}</td>
                                <td>
                                    <ButtonBox label="수정" className="btn-secondary" onClick={() => processUpd(item)} />
                                    <ButtonBox label="삭제" className="btn-danger" onClick={() => processDel(item)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TodoList;