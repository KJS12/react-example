const codeViewer = {
props:
`props 부모 컴포넌트
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
`props 자식 컴포넌트 - props 객체를 받아 사용한다.
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
`props 자식 컴포넌트 - 구조 분해 할당을 선언하여 사용한다.
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