import { useState } from "react";
import { useForm } from "../../../hooks";
import { CodeViewer, CodeViewerContainer } from "../../../components";
import codeViewer from "./codeViewer";

const heavyWork = () => {
    console.log('엄청 무거운 작업');
    return ['홍길동', '김김김']
}

const UseState = () => {
    const [names, setNames] = useState(() => {
        return heavyWork();
    });
    const {formData, handleInputChange} = useForm([]);


    const handleUpdate = () => {
        setNames((prev) => {
            console.log("이전 데이터", prev)
            return (
                [formData.name, ...prev]
            )
        });
    }

    return (
        <div>
            <CodeViewerContainer>
                <CodeViewer code={codeViewer.useState} />
            </CodeViewerContainer>
            <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
            />
            <button onClick={handleUpdate}>Update</button>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseState;