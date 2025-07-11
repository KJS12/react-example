const codeViewer = {
description:
`컴포넌트 간에 데이터를 전달하기 위해 사용하는 방법을 일컫는 말로,
주로 부모 컴포넌트에서 자식 컴포넌트에게 데이터를 전달할 떄 사용된다.
`,
props:
`부모 컴포넌트
const Parent = () => {
    return (
        <Child
            boolValue={true}
            numValue={1}
            arrayValue={[1,2,3, 'ㅇㅇㅇ']}
            objValue={{name: '제목', age: 30}}
            nodeValue={<>노드</>}
            funcValue={() => console.log('메시지')}
        />
    )
}`,

props_Child_1:
`자식 컴포넌트 (방법1): props '객체'를 그대로 전달받아 사용한다.
※ 객체명은 꼭 'props'일 필요는 없다(ex. items, obj...)
const Child = (props) => { // {boolean: true, numValue: 1 ...}
    return (
        <div>
            <p>{props.boolean}</p>
            <p>{props.numValue}</p>
            <p>{props.arrayValue}</p>
            <p>{props.objValue}</p>
            <p>{props.nodeValue}</p>
            <p>{props.funcValue}</p>
        </div>
    );
}

export default Child;
`,

props_Child_2:
`자식 컴포넌트 (방법2): 전달받은 props를 '구조 분해 할당'하여 보다 간결하게 사용할 수 있다.
const Child = ({
    boolValue,
    numValue,
    arrayValue = [],
    objValue = {},
    nodeValue = <>없음</>,
    funcValue = () => {},
}) => {
    return (
        <div>
            <p>{boolean}</p>
            <p>{numValue}</p>
            <p>{arrayValue}</p>
            <p>{objValue}</p>
            <p>{nodeValue}</p>
            <p>{funcValue}</p>
        </div>
    );
}

export default Child;
`,
}

export default codeViewer;