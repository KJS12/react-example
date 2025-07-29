import React from 'react';
import { CodeViewerContainer } from '../../../components';
import codeViewer from './codeViewer';
import PropsChildrenArray1 from './PropsChildrenArray1';
import PropsChildrenArray2 from './PropsChildrenArray2';
import PropsChildrenBasic from './PropsChildrenBasic';
import PropsChildrenSingle from './PropsChildrenSingle';
import PropsChildrenArray3 from './PropsChildrenArray3';
import { Section } from '../../../shared/component';
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
                    "children Array3": codeViewer.childrenArray3,
                }}
            />

            <Section.Dashed>
                <PropsChildrenBasic>
                    <p>예제 1</p>
                    <p>예제 2</p>
                    <p>예제 3</p>
                </PropsChildrenBasic>
            </Section.Dashed>
            <Section.Dashed>
                <PropsChildrenSingle>
                    <p>단건 1</p>
                    {/* <p>단건 2</p> error */}
                </PropsChildrenSingle>
            </Section.Dashed>
            <Section.Dashed>
                <PropsChildrenArray1
                    header={<p>헤더 영역</p>}
                    content={<p>컨텐츠 영역</p>}
                    footer={<p>푸터 영역</p>}
                />
            </Section.Dashed>
            <Section.Dashed>
                <PropsChildrenArray2>
                    <div slot="header"><p>헤더 영역</p></div>
                    <div slot="content"><p>컨텐츠 영역</p></div>
                    <div slot="footer"><p>푸터 영역</p></div>
                </PropsChildrenArray2>
            </Section.Dashed>
            <Section.Dashed>
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
            </Section.Dashed>
        </>
    )
}

export default PropsChildren;