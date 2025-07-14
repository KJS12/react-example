// 3. props로 여러 개 넘기기
const PropsChildrenArray1 = ({ header, content, footer }) => {
    return (
        <div>
            <h3>children - 다건 예제 1</h3>
            <strong>Header</strong>
            { header }

            <strong>Content</strong>
            { content }

            <strong>footer</strong>
            { footer }
        </div>
    )
}

export default PropsChildrenArray1;