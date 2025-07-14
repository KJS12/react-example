const codeViewer = {
description:
`CustomHook
- React 기본 훅 (useState, useEffect 등)을 좋바하여 반복되는 로직을 재사용 가능하도록 만든 '사용자 정의 함수'로
- 주로 상태 관리, 데이터 요청, 이벤트 처리 등 '공통된 로직을 캡슐화' 하는데 사용된다.

※※ 기본규칙 ※※
→ CustomHook의 이름은 반드시 'use(접두사)와 해당 훅의 기능 또는 목적을 설명하는 단어를 조합'하여 생성한다.
`,

useFetch:
`// 서버와 통신하는 CustomHook
import { useEffect, useState } from "react";

export const useFetch = (baseUrl, initialValue) => {

    const [data, setData] = useState(null);

    const fetchUrl = (type) => {
        fetch(\`\${baseUrl}/\${type}\`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((e) => console.log(e.message))
    }

    useEffect(() => {
        fetchUrl(initialValue);
    }, [])

    return { data, fetchUrl }
}
`,

useInput:
`// input 데이터 관리하는 CustomHook
import { useState } from "react";

export const useInput = (initialValue, submitAction) => {
    const [inputValue, setInputValue] = useState(initialValue);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        setInputValue('');
        submitAction(inputValue);
    }

    return [inputValue, handleChange, handleSubmit];
}
`,

example:
`
import { useInput } from "./useInput";
import { useFetch } from "./useFetch";

const displayMessage = (message) => {
    alert(message);
}

const baseUrl = "https://jsonplaceholder.typicode.com";

const CustomHook = () => {
    const [inputValue, handleChange, handleSubmit] = useInput('', displayMessage);
    const {data, fetchUrl} = useFetch(baseUrl, 'users');
    const {data: userData} = useFetch(baseUrl, 'users');
    const {data: postData} = useFetch(baseUrl, 'posts');

    return (
        <div>
            <div className="container-line">
                <h1>useInput</h1>
                <input value={inputValue} onChange={handleChange} />
                <button onClick={handleSubmit}>확인</button>
            </div>
            <div className="container-line">
                <h1>useFetch</h1>
                <button onClick={() => fetchUrl('users')}>Users</button>
                <button onClick={() => fetchUrl('posts')}>Posts</button>
                <button onClick={() => fetchUrl('todos')}>Todos</button>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
            <div className="container-line">
                <h1>Users</h1>
                {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
                <h1>Posts</h1>
                {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
            </div>
        </div>
    )
}

export default CustomHook;
`,
}

export default codeViewer;