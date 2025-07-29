import { useRef } from "react";
import Modal from "./Modal";
import { CodeViewerContainer } from "../../../components";
import codeViewer from "./codeViewer";
import { ButtonBox } from "../../../shared/inputs";

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

            <div className="flex gap-2">
                <ButtonBox label="모달 열기" onClick={() => modalRef.current.open()} />
                <ButtonBox label="모달 닫기" onClick={() => modalRef.current.close()} />
                <ButtonBox label="모달 토글" onClick={() => modalRef.current.toggle()} className="btn btn-secondary" />
            </div>

            <Modal ref={modalRef}>
                <p>모달 내부입니다.</p>
            </Modal>
        </>
    )
}

export default UseImperativeHandle;