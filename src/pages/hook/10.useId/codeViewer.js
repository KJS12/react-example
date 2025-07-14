const codeViewer = {
description:
`React 내장 Hook (useId)
- React 18부터 도입된 훅(Hook)으로 서버와 클라이언트에서 동일한 고유 ID를 생성할 수 있게 해주는 기능이다.
- 주로 접근성(ARIA))이나 폼 요소(label, input, 연동) 등에 사용된다.

※※ 사용이유 ※※
→ Math.random()이나 Date.now() 등은 SSR(*) 환경에서 클라이언트와 값이 달려져서 오류가 발생할 수 있어
이러한 문제 없이 동일한 ID를 안전하게 제공해주는 useId를 사용한다.

* SSR (Server-Side Rendering)
→ React 컴포넌트를 서버에서 HTML로 렌더링해서 클라이언트에 전달하는 방식
`,

useId:
`const id = useId(); // :r0:  :r1:
`,

example:
`import { useId } from "react";

const UseId = () => {
    return (
        <MyInput />
    )
}

const MyInput = () => {
    const id = useId();
    console.log(id); // :r0:  :r1:

    return (
        <div>
            <label htmlFor={id}>이름</label>
            <input id={id} />
        </div>
    )
}

export default UseId;
`,
}

export default codeViewer;