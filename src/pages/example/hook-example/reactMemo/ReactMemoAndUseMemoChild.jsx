import React from "react";

const ReactMemoAndUseMemoChild = ({name}) => {
    console.log("🙋‍♂️[React.memo + useMemo] 자식 컴포넌트도 렌더링 되었네요");
    return (
        <div style={{border: '2px solid powderblue', padding: '10px'}}>
            <h3>🙋‍♂️자녀</h3>
            <p>성: {name.lastName}</p>
            <p>이름: {name.firstName}</p>
        </div>
    )
}

export default React.memo(ReactMemoAndUseMemoChild);