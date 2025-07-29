import React from "react";
import { ButtonBox } from "../../../shared/inputs";

const ReactMemoAndUseCallbackChild = ({name, tellMe}) => {
    console.log("🙋‍♂️[React.memo + useCallback] 자식 컴포넌트도 렌더링 되었네요");
    return (
        <div style={{border: '2px solid powderblue', padding: '10px'}}>
            <h3>🙋‍♂️자녀</h3>
            <p>이름: {name}</p>
            <ButtonBox label="버튼" onClick={tellMe} />
        </div>
    )
}

export default React.memo(ReactMemoAndUseCallbackChild);