import { useState } from "react";

export const useInput = (initialValue) => {
    const [input, setInput] = useState(initialValue);

    // 변경시마다 업데이트
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInput({
            ...input,
            [name]: value,
        })
    }

    // 초기화
    const resetInput = () => {
        setInput({initialValue});
    }

    return {
        input, setInput, handleChange, resetInput,
    }
}