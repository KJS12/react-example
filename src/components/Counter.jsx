import { useState } from "react";

const Counter = () => {

    // count는 상태, setCount는 count를 변경하는 함수
    const [count, setCount] = useState(0);

    // 버튼 클릭시 count 상태가 1씩 증가
    const increment = () => setCount(count + 1);

    return (
        <div>
            <h1>현재 카운트: {count}</h1>
            <button onClick={increment}>카운트 증가</button>
        </div>
    )
}

export default Counter;



