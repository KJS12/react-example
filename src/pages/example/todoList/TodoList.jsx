import { useEffect, useReducer, useRef, useState } from "react";
import { Form } from "react-router-dom";
import { JUtilsValid } from "../../../utils/utils";
import { useInput } from "../../../hooks/useInput";
import { Tag } from "../../../share";

// 초기 데이터
const initialValue = {
    list: []
}

const reducer = (state, action) => {
    // if(JUtilsValid.isEmpty(state)) return;
    console.log("변경 데이터", state.list, action.payload);
    switch (action.type) {
        case 'add':
            return {...state, list: [...state.list, {...action.payload, id: Date.now()}]};
        case 'update':
            return {
                ...state,
                list: state.list.map((prev) => (
                    prev.id === action.payload.id ? {...prev, ...action.payload} : prev
                ))
            }
        case 'delete':
            return {
                ...state,
                list: state.list.filter(prev => prev.id !== action.payload.id)
            };
        default:
            return state;
    }
}

/**
 * 할일 관리
 * @returns
 */
const TodoList = () => {
    const {input, handleChange, resetInput} = useInput({title: '', content: ''});
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const [todoList, dispatch] = useReducer(reducer, initialValue);

    // 등록 이벤트
    const handleSubmit = (e) => {
        // 기본동작 막기
        e.preventDefault();

        // 유효성 검사
        if(JUtilsValid.isEmpty(titleRef.current.value)) {
            alert("제목을 입력해주세요");
            titleRef.current.focus();
            return;
        }

        if(JUtilsValid.isEmpty(contentRef.current.value)) {
            alert("내용을 입력해주세요");
            contentRef.current.focus();
            return;
        }

        // 등록하기
        processAdd();

        // 입력 데이터 초기화
        resetInput();

        titleRef.current.value = null;
        contentRef.current.value = null;
    }

    const processAdd = () =>  dispatch({type: 'add', payload: input});
    const processUpd = (input) => dispatch({type: 'update', payload: input});
    const processDel = (input) => dispatch({type: 'delete', payload: input});

    return (
        <div>
            <h3>할일 등록</h3>
            <Form onSubmit={handleSubmit} style={{marginBottom: '10px'}}>
                <Tag.InputBox
                    label="제목"
                    ref={titleRef}
                    id="title"
                    name="title"
                    value={input.title}
                    onChange={handleChange}
                />
                <Tag.InputBox
                    label="내용"
                    ref={contentRef}
                    id="content"
                    name="content"
                    value={input.content}
                    onChange={handleChange}
                />
                <div className="select" style={{display: "flex", gap: '5px'}}>
                    <Tag.RadioBox
                        label="예"
                        // id="select1"
                        name="radioExample1"
                        value={input.radioExample1}
                        onChange={handleChange}
                    />
                    <Tag.RadioBox
                        label=" 아니오"
                        // id="select2"
                        name="radioExample1"
                        value={input.radioExample1}
                        onChange={handleChange}
                    />
                </div>
                <div className="select" style={{display: "flex", gap: '5px'}}>
                    <Tag.RadioBox
                        label="예"
                        // id="select1"
                        name="radioExample2"
                        value={input.radioExample2}
                        onChange={handleChange}
                    />
                    <Tag.RadioBox
                        label=" 아니오"
                        // id="select2"
                        name="radioExample2"
                        value={input.radioExample2}
                        onChange={handleChange}
                    />
                </div>
                <Tag.Button type="submit">
                    등록
                </Tag.Button>
            </Form>
            <div>
                {todoList.list.map((item, idx) => (
                    <table key={idx} style={{borderBlockEnd: '1px solid gray', width: '300px', textAlign: 'left'}}>
                        <thead>
                            <tr>
                                <th>{item.title}</th>
                                <th>버튼</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{item.content}</td>
                                <td>
                                    <button style={{backgroundColor: 'skyblue'}} onClick={() => processUpd(item)}>수정</button>
                                    <button style={{backgroundColor: 'red'}} onClick={() => processDel(item)}>삭제</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ))}
            </div>
        </div>
    )
}

export default TodoList;