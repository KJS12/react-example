import { CodeViewerContainer } from '../../../components';
import Child from './Child';
import codeViewer from './codeViewer';

const Parent = () => {
    return (
        <>
            <CodeViewerContainer
                files={{
                    "설명": codeViewer.description,
                    "Parent Component": codeViewer.props,
                    "Child Component_1": codeViewer.props_Child_1,
                    "Child Component_2": codeViewer.props_Child_2,
                }}
            />
            <Child
                boolValue={true}
                numValue={1}
                arrayValue={[1,2,3, 'ㅇㅇㅇ']}
                objValue={{name: '제목', age: 30}}
                nodeValue={<>노드</>}
                funcValue={() => console.log('메시지')}
            />
        </>
    )
}

export default Parent;