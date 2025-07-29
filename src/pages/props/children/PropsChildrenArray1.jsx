import { Highlight } from "../../../shared/component";

// 3. props로 여러 개 넘기기
const PropsChildrenArray1 = ({ header, content, footer }) => {
    return (
        <div>
            <Highlight title="children - 다건 예제 1" />
            <div className='d-flex' style={{gap: '20px'}}>
                { header }
                { content }
                { footer }
            </div>
        </div>
    )
}

export default PropsChildrenArray1;