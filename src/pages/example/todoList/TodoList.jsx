import { useReducer, useRef } from "react";
import { Form } from "react-router-dom";
import { reducer } from "./reducer";
import { JUtilsValid } from "../../../utils/utils";
import { useInput } from "../../../hooks";
import { ButtonBox, InputBox, } from "../../../shared/inputs";
import { Highlight } from "../../../shared/component";
import { inputValue } from "./data";
import CheckItem from "./CheckItem";
import AgreeItem from "./AgreeItem";

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
        const agreeData = inputRefs.current['agree']?.getAgreed?.() ?? {};
        const checkData = inputRefs.current['check']?.getChecked?.() ?? {};
        const newData = {
            ...input,
            ...checkData, // 예: { check1: "Y", check2: "N", ... }
            ...agreeData, // 예: { agree1: "Y", agree2: "N", ... }
        };
        processAdd(newData);

        handleReset();
    }

    // 추가하기
    const processAdd = (data) => dispatch({type: 'add', payload: data});

    // 수정하기
    // const processUpd = (data) => dispatch({type: 'update', payload: data});

    // 삭제하기
    const processDel = (data) => dispatch({type: 'delete', payload: data});

    const handleReset = () => {
        // 입력 데이터 초기화
        resetInput();
        inputRefs.current['title'].value = null;
        inputRefs.current['content'].value = null;
        inputRefs.current['check']?.reset?.(); // 선택 리셋
        inputRefs.current['agree']?.reset?.(); // 약관 리셋
    }

    return (
        <div>
            <Highlight title="할일 등록"/>
            <Form onSubmit={handleSubmit} className="my-5">
                {/* 제목 */}
                <InputBox
                    label="제목"
                    ref={(el) => (inputRefs.current['title'] = el)}
                    name="title"
                    value={input.title ?? ""}
                    onChange={handleChange}
                />

                {/* 내용 */}
                <InputBox
                    label="내용"
                    ref={(el) => (inputRefs.current['content'] = el)}
                    name="content"
                    value={input.content ?? ""}
                    onChange={handleChange}
                />

                {/* 체크박스 (Checkbox) */}
                <CheckItem ref={(el) => (inputRefs.current['check'] = el)}/>

                {/* 약관동의 (Agree) */}
                <AgreeItem ref={(el) => (inputRefs.current['agree'] = el)}/>

                {/* 등록버튼 */}
                <ButtonBox type="submit" label="등록" />
            </Form>

            <div>
                <table className="table">
                    <thead className="table-thead">
                        <tr>
                            {
                                [
                                    "제목", "내용",
                                    "체크1", "체크2", "체크3",
                                    "약관1", "약관2", "약관3", "약관4",
                                    "이벤트"].map((item, index) => (
                                    <th key={index} className="table-thead-th">{item}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {todoList.list.map((item, index) => {
                            console.log(JSON.stringify(item, null, 2));
                            return (
                                <tr key={index} className="table-row">
                                    <td className="table-cell">{item.title}</td>
                                    <td className="table-cell">{item.content}</td>
                                    <td className="table-cell">{!!item.check1 ? '선택' : '미선택'}</td>
                                    <td className="table-cell">{!!item.check2 ? '선택' : '미선택'}</td>
                                    <td className="table-cell">{!!item.check3 ? '선택' : '미선택'}</td>
                                    <td className="table-cell">{item.agree1}</td>
                                    <td className="table-cell">{item.agree2}</td>
                                    <td className="table-cell">{item.agree3}</td>
                                    <td className="table-cell">{item.agree4}</td>
                                    <td className="table-cell">
                                        <div className="inline-flex gap-1">
                                            {/* <ButtonBox label="수정" className="btn btn-secondary" onClick={() => processUpd(item)} /> */}
                                            <ButtonBox label="삭제" className="btn btn-danger" onClick={() => processDel(item)} />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TodoList;