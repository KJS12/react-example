import PropTypes from 'prop-types';

const Child = ({
    boolValue,
    numValue,
    arrayValue = [],
    objValue = {},
    nodeValue = <>없음</>,
    funcValue = () => {},
}) => {
    return (
        <div className='table-container'>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <td>boolean</td>
                        <td>number</td>
                        <td>array</td>
                        <td>object</td>
                        <td>node</td>
                        <td>function</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{String(boolValue)}</td>
                        <td>{numValue}</td>
                        <td>{arrayValue.join(', ')}</td>
                        <td>
                            <pre>
                                {JSON.stringify(objValue, null, 2)}
                            </pre>
                        </td>
                        <td>{nodeValue}</td>
                        <td>{String(funcValue)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

Child.propTypes = {
    boolValue: PropTypes.bool,
    numValue: PropTypes.number,
    arrayValue: PropTypes.arrayOf(PropTypes.number),
    objValue: PropTypes.object,
    nodeValue: PropTypes.node,
    funcValue: PropTypes.func,
}


export default Child;