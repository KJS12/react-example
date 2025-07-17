const codeViewer = {
description:
`컴포넌트가 다른 컴포넌트를 포함할 수 있게 해주는 특수한 프로퍼티로,
이 프로퍼티를 통해 '부모 컴포넌트가 자식 컴포넌트를 감싸고 전달'할 수 있습니다.
`,

childrenBasic:
`children - 기본 예제
──────────────────────────────────────────────────────────
<PropsChildrenBasic>
    <p>예제 1</p>
    <p>예제 2</p>
    <p>예제 3</p>
</PropsChildrenBasic>
──────────────────────────────────────────────────────────
// 1. children만 넘기기
const PropsChildrenBasic = ({ children }) => {
    return (
        <div>
            <h3>children - 기본 예제</h3>
            { children }
        </div>
    )
}

export default PropsChildrenBasic;
`,

childrenSingle:
`children - 단건 예제
──────────────────────────────────────────────────────────
<PropsChildrenSingle>
    <p>단건 1</p>
</PropsChildrenSingle>
──────────────────────────────────────────────────────────
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

export default PropsChildrenOnly;
`,

childrenArray1:
`children - 다건 예제 1
──────────────────────────────────────────────────────────
<PropsChildrenArray1
    header={<p>헤더 영역</p>}
    content={<p>컨텐츠 영역</p>}
    footer={<p>푸터 영역</p>}
/>
──────────────────────────────────────────────────────────
// 3. props로 여러 개 넘기기
const PropsChildrenArray1 = ({ header, content, footer }) => {
    return (
        <div>
            <h3>children - 다건 예제 1</h3>
            <div className='d-flex' style={{gap: '20px'}}>
                { header }
                { content }
                { footer }
            </div>
        </div>
    )
}

export default PropsChildrenArray1;
`,

childrenArray2:
`children - 다건 예제 2 (Vue의 slot 패턴 개념)
──────────────────────────────────────────────────────────
<PropsChildrenArray2>
    <div slot="header"><p>헤더 영역</p></div>
    <div slot="content"><p>컨텐츠 영역</p></div>
    <div slot="footer"><p>푸터 영역</p></div>
</PropsChildrenArray2>
──────────────────────────────────────────────────────────
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
`,

childrenArray3:
`children - 다건 예제 3 (자식 컴포넌트 Type)
──────────────────────────────────────────────────────────
<PropsChildrenArray3>
    <PropsChildrenArray3.Header>
        <p>헤더 영역</p>
    </PropsChildrenArray3.Header>
    <PropsChildrenArray3.Content>
        <p>컨텐츠 영역</p>
    </PropsChildrenArray3.Content>
    <PropsChildrenArray3.Footer>
        <p>푸터 영역</p>
    </PropsChildrenArray3.Footer>
</PropsChildrenArray3>
──────────────────────────────────────────────────────────
import React from 'react';

// 4. type으로 넘기기
const PropsChildrenArray3 = ({ children }) => {
    const childrenArray = React.Children.toArray(children); // React.Children.toArray를 사용하여 children을 배열로 변환

    const getType = (componentType) => {
        return childrenArray.find(child => child.type === componentType);
    }

    return (
        <div>
            <h3>children - 다건 예제 3</h3>
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
`,

}

export default codeViewer;