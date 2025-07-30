import { forwardRef, useImperativeHandle, useState } from "react";
import { Section } from "../../../shared/component";
import { CheckBox } from "../../../shared/inputs";
import { CHECK_ITEMS } from "./data";

const CheckItem = (props, ref) => {
    const initialState = CHECK_ITEMS.reduce((acc, item) => {
        acc[item.name] = false;
        return acc;
    }, {});

    // 약관 상태관리
    const [agrees, setAgrees] = useState(initialState);

    // 체크박스 상태 변경 핸들러
    const handleCheckboxChange = (e) => {
        const {name, checked} = e.target;
        setAgrees((prev) => ({
            ...prev,
            [name]: checked
        }));
    }

    // 상위 컴포넌트에서 데이터 사용할 수 있도록 넘김
    useImperativeHandle(ref, () => ({
        getChecked: () => agrees,
        reset: () => setAgrees({}),
    }))

    return (
        <Section.Basic>
            {
                CHECK_ITEMS.map((item) => (
                    <CheckBox
                        key={item.name}
                        label={item.label}
                        name={item.name}
                        checked={!!agrees[item.name]}
                        onChange={handleCheckboxChange}
                    />
                ))
            }
        </Section.Basic>
    )
}

export default forwardRef(CheckItem);