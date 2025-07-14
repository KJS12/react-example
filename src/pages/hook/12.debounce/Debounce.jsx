
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { CodeViewerContainer } from "../../../components";
import codeViewer from "./codeViewer";

/**
 *  @description
 *  Debounce정의
 *  특정 이벤트가 연속적으로 발생할 때, 제일 마지막 이벤트가 발생한 후 일정 시간이 지난 후에 함수를 호출함
 *
 * 사용하는 이유
 *  1) 함수의 호출 횟수를 제한함으로서 리소스의 낭비를 줄여준다.
 *  2) 리소스의 낭비 하지 않으면 프로그램의 성능↑ 서버 비용↓
 *
 * @returns
 */
const Debounce = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState([]);
    const debouncedInput = useDebounce(input, 300);

    useEffect(() => {
        const users = fetchDataFromServer(debouncedInput);
        setResult(users);
    }, [debouncedInput]);

    return (
        <div>
            <CodeViewerContainer
                title={"Debounce"}
                files={{
                    "설명": codeViewer.description,
                    "useDebounce": codeViewer.useDebounce,
                    "example": codeViewer.example,
                }}
            />
            <br />

            <div className="container">
                <div className="search-container">
                    <input
                        placeholder="여기다 검색하세요"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <ul>
                        {result.map((user, idx) => (
                            <li key={idx}>
                                <span>{user.name}</span>
                                <span>{user.age}세</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const fetchDataFromServer = (value) => {
    if(!value) {
        return [];
    }

    console.log("서버로부터 데이터를 가져오는중...");

    const users = [
        {name: "김철수", age: "16"},
        {name: "이영희", age: "26"},
        {name: "김민수", age: "15"},
        {name: "홍길동", age: "20"},
        {name: "홍민영", age: "25"},
        {name: "김민영", age: "32"},
    ];

    return users.filter((user) => user.name.startsWith(value));
}

export default Debounce;