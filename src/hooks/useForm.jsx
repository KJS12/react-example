import { useCallback, useState } from "react";

/**
 * 폼 상태 및 입력값 제어
 * @param {*} initData
 * @returns
 */
export const useForm = (initData = {}) => {

    const [formData, setFormData] = useState(initData);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prev) => (
            {
                ...prev,
                [name]: value // 변경된 필드만 업데이트
            }
        ));
    }, []);

    return {
        formData,
        setFormData,
        handleInputChange,
    }
}