import { useId } from "react";
import { CodeViewerContainer } from "../../../components";
import codeViewer from "./codeViewer";

const UseId = () => {
    return (
        <MyInput />
    )
}

const MyInput = () => {
    const id = useId();
    console.log(id)

    return (
        <div>
            <CodeViewerContainer
                title={"useId"}
                files={{
                    "설명": codeViewer.description,
                    "useId": codeViewer.useId,
                    "example": codeViewer.example,
                }}
            />
            <label htmlFor={id}>이름</label>
            <input id={id} />
        </div>
    )
}

export default UseId;