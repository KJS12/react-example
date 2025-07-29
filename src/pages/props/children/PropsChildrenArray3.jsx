import React from 'react';
import { Highlight } from '../../../shared/component';

// 4. type으로 넘기기
const PropsChildrenArray3 = ({ children }) => {
    const childrenArray = React.Children.toArray(children); // React.Children.toArray를 사용하여 children을 배열로 변환

    const getType = (componentType) => {
        return childrenArray.find(child => child.type === componentType);
    }

    return (
        <div>
            <Highlight title="children - 다건 예제 3" />
            <div className='d-flex' style={{gap: '20px'}}>
                { getType(PropsChildrenArray3.Header) }
                { getType(PropsChildrenArray3.Content) }
                { getType(PropsChildrenArray3.Footer) }
            </div>
        </div>
    )
}

PropsChildrenArray3.Header = ({children}) => <div className='header'>{children}</div>
PropsChildrenArray3.Content = ({children}) => <div className='content'>{children}</div>
PropsChildrenArray3.Footer = ({children}) => <div className='footer'>{children}</div>

export default PropsChildrenArray3;