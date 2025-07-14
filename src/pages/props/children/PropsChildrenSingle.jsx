import React from "react";

// 2. children만 넘기기 (하위 요소 1개만 받기)
const PropsChildrenSingle = ({ children }) => {
    const child = React.Children.only(children);

    return (
        <div>
            <h3>children - 단건 예제</h3>
            { child }
        </div>
    )
}

export default PropsChildrenSingle;