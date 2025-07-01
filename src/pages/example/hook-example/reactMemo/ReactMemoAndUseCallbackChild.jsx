import React from "react";

const ReactMemoAndUseCallbackChild = ({name, tellMe}) => {
    console.log("🙋‍♂️[React.memo + useCallback] 자식 컴포넌트도 렌더링 되었네요");
    return (
        <div style={{border: '2px solid powderblue', padding: '10px'}}>
            <h3>🙋‍♂️자녀</h3>
            <p>이름: {name}</p>
            <button onClick={tellMe}>버튼</button>
        </div>
    )
}

export default React.memo(ReactMemoAndUseCallbackChild);