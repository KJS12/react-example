import { useRef } from "react";
import Modal from "./Modal";
import { CodeViewerContainer } from "../../../components";
import codeViewer from "./codeViewer";

const UseImperativeHandle = () => {
    const modalRef = useRef();

    return (
        <>
            <CodeViewerContainer
                title="useImperativeHandle"
                files={{
                    "설명": codeViewer.description,
                    "forwardRef": codeViewer.forwardRef,
                    "useImperativeHandle": codeViewer.useImperativeHandle,
                    "example": codeViewer.example,
                }}
            />

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