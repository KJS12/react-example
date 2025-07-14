import React from 'react';
import { CodeViewerContainer } from '../../../components';
import codeViewer from './codeViewer';
import PropsChildrenArray1 from './PropsChildrenArray1';
import PropsChildrenArray2 from './PropsChildrenArray2';
import PropsChildrenBasic from './PropsChildrenBasic';
import PropsChildrenSingle from './PropsChildrenSingle';
const PropsChildren = () => {

    return (
        <>
            <CodeViewerContainer
                title={"Props Children"}
                files={{
                    "설명": codeViewer.description,
                    "children Basic": codeViewer.childrenBasic,
                    "children Single": codeViewer.childrenSingle,
                    "children Array1": codeViewer.childrenArray1,
                    "children Array2": codeViewer.childrenArray2,
                }}
            />

            <div className='hr'>
                <PropsChildrenBasic>
                    <p>예제 1</p>
                    <p>예제 2</p>
                    <p>예제 3</p>
                </PropsChildrenBasic>
            </div>
            <div className='hr'>
                <PropsChildrenBasic>
                    <p>예제 1</p>
                    <p>예제 2</p>
                    <p>예제 3</p>
                </PropsChildrenBasic>
            </div>
            <div className='hr'>
                <PropsChildrenSingle>
                    <p>단건 1</p>
                    {/* <p>단건 2</p> */}
                </PropsChildrenSingle>
            </div>
            <div className='hr'>
                <PropsChildrenArray1
                    header={<p>헤더 영역</p>}
                    content={<p>컨텐츠 영역</p>}
                    footer={<p>푸터 영역</p>}
                />
            </div>
            <div className='hr'>
                <PropsChildrenArray2>
                    <div slot="header"><p>헤더 영역</p></div>
                    <div slot="content"><p>컨텐츠 영역</p></div>
                    <div slot="footer"><p>푸터 영역</p></div>
                </PropsChildrenArray2>
            </div>
        </>
    )
}

export default PropsChildren;