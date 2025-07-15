const codeViewer = {
description:
`React 내장 Hook (useImperativeHandle)
- 자식 컴포넌트가 부모 컴포넌트에 특정 메서드나 값을 노출할 수 있도록 해주는 기능으로, 주로 forwardRef와 함께 사용된다.
──────────────────────────────────────────────────────────
부모가 자식에게 ref 객체를 전달하고 싶다면 forwardRef를 '필수'로 사용해야 한다.
ref를 props처럼 받아서 하위 DOM 또는 메서드에 연결하고 싶을 때 사용한다.
'매개변수 구조는 고정되어 있다: (props, ref)'

forwardRef(renderFunction)
- renderFunction → (props, ref) => ReactElement 형태의 함수
- props          → 일반적인 props
- ref            → 부모로부터 전달된 ref 객체
──────────────────────────────────────────────────────────
useImperativeHandle(ref, createHandle, [dependency])
- ref            → 부모로부터 전달받은 ref 객체
- createHandle   → ref에 노출할 객체를 반환하는 함수
- dependency     → (선택) 의존성 배열로, 값이 변경될 때만 createHandle이 다시 실행됨
`,

forwardRef:
`const MyComponent = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            Hello, {props.name}
        </div>;
    )
});
`,

useImperativeHandle:
`const [isOpen, setIsOpen] = useState(false);

useImperativeHandle(ref, () => ({
    open: () => { setIsOpen(true) },
    close: () => { setIsOpen(false) },
    toggle: () => { setIsOpen((prev) => !prev) }
}));
`,

example:
`import { useRef } from "react";
import Modal from "./Modal";

const UseImperativeHandle = () => {
    const modalRef = useRef();

    return (
        <>
            <button onClick={() => modalRef.current.open()}>모달 열기</button>
            <button onClick={() => modalRef.current.close()} >모달 닫기</button>
            <button onClick={() => modalRef.current.toggle()}>모달 토글</button>

            <Modal ref={modalRef}>
                <p>모달 내부입니다.</p>
            </Modal>
        </>
    )
}


export default UseImperativeHandle;

import { forwardRef, useImperativeHandle, useState } from "react";

const Modal = forwardRef((props, ref) => {
    const {children} = props;
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        isOpen,
        open: () => { setIsOpen(true) },
        close: () => { setIsOpen(false) },
        toggle: () => { setIsOpen((prev) => !prev) }
    }));

    if(!isOpen) return  null;

    return (
        <div style={{
            position: 'fixed',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -30%)',
            background: 'white',
            padding: '1.5rem',
            border: '1px solid #ccc',
            borderRadius: '8px',
            zIndex: 9999,
        }}>
            {children}
        </div>
    );
});


export default Modal;
`,
}

export default codeViewer;