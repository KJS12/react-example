import { CodeViewer, CodeViewerContainer } from '../../../components';
import Child from './Child';
import codeViewer from './codeViewer';

const Parent = () => {
    return (
        <>
            <CodeViewerContainer>
                <CodeViewer code={codeViewer.props} />
                <CodeViewer code={codeViewer.props_Child_1} />
                <CodeViewer code={codeViewer.props_Child_2} />
            </CodeViewerContainer>
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