import React from 'react';

// 4. slot 패턴으로 넘기기
const PropsChildrenArray2 = ({ children }) => {
    const childrenArray = React.Children.toArray(children); // React.Children.toArray를 사용하여 children을 배열로 변환

    const getSlot = (slotName) => {
        return childrenArray.find((child) => child.props.slot === slotName);
    }

    return (
        <div>
            <h3>children - 다건 예제 2</h3>
            <div className='d-flex' style={{gap: '20px'}}>
                { getSlot('header') }
                { getSlot('content') }
                { getSlot('footer') }
            </div>
        </div>
    )
}

export default PropsChildrenArray2;