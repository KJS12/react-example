import { Highlight } from "../../../shared/component";

// 1. children만 넘기기
const PropsChildrenBasic = ({ children }) => {
    return (
        <div>
            <Highlight title="children - 기본 예제" />
            { children }
        </div>
    )
}

export default PropsChildrenBasic;