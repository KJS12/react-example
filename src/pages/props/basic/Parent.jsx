import PropTypes from 'prop-types';

const Parent = () => {
    return (
        <ChildProps
            boolValue={true}
            numValue={1}
            arrayValue={[1,2,3, 'ㅇㅇㅇ']}
            objValue={{name: '제목', age: 30}}
            nodeValue={<h1>노드</h1>}
            funcValue={() => console.log('메시지')}
        />
    )
}

const ChildProps = (props) => {
    const {
        boolValue,
        numValue,
        arrayValue,
        objValue,
        nodeValue,
        funcValue,
    } = props;

    return (
        <div>
            <span>불리언값: {boolValue}</span>
            <br/><span>숫자값: {numValue}</span>
            <br/><span>배열값: {arrayValue}</span>
            <br/><pre>객체값: {JSON.stringify(objValue, null, 2)}</pre>
            <br/><span>노드값: {nodeValue}</span>
            <br/><span>함수값: {String(funcValue)}</span>
        </div>
    )
}

ChildProps.propTypes = {
    boolValue: PropTypes.bool,
    numValue: PropTypes.number,
    arrayValue: PropTypes.arrayOf(PropTypes.number),
    objValue: PropTypes.object,
    nodeValue: PropTypes.node,
    funcValue: PropTypes.func,
}

export default Parent;