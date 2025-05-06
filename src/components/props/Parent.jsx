import Child from "./Child"

const Parent = () => {
    return (
        <Child>
            <Child.Header>
                <h1>제목</h1>
            </Child.Header>
            <Child.Body>
                <h2>Hello, React</h2>
            </Child.Body>
            <Child.Footer>
                <h3>확인</h3>
            </Child.Footer>
        </Child>
    )
}

export default Parent;