import React from 'react';

// 4. slot 패턴으로 넘기기
const PropsChildrenArray2 = ({ children }) => {
    const childrenArray = React.Children.toArray(children); // React.Children.toArray를 사용하여 children을 배열로 변환

    const getSlot = (slotName) => {
        // return childrenArray.find((child) => child.props.slot === slotName);
        return childrenArray.find((child) => console.log(child));
    }

    return (
        <div>
            <h3>children - 다건 예제 2</h3>
            <strong>Header</strong>
            {getSlot('header')}

            <strong>Content</strong>
            {getSlot('content')}

            <strong>footer</strong>
            {getSlot('footer')}
        </div>
    )
}

export default PropsChildrenArray2;