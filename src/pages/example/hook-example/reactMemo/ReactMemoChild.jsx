import React from "react";

const ReactMemoChild = ({name, age}) => {
    console.log("🙋‍♂️[React.memo] 자식 컴포넌트도 렌더링 되었네요");
    return (
        <div style={{border: '2px solid powderblue', padding: '10px'}}>
            <h3>🙋‍♂️자녀</h3>
            <p>이름: {name}</p>
            <p>나이: {age}</p>
        </div>
    )
}

export default React.memo(ReactMemoChild);