import { forwardRef, useImperativeHandle, useState } from "react";
import { Section } from "../../../shared/component";
import { RadioBox } from "../../../shared/inputs";
import { AGREE_ITEMS } from "./data";

const AgreeItem = (props, ref) => {
    const initialState = AGREE_ITEMS.reduce((acc, item) => {
        acc[item.name] = ""; // 초기값
        return acc;
    }, {});

    // 약관 상태관리
    const [agrees, setAgrees] = useState(initialState);

    // 라디오박스 상태 변경 핸들러
    const handleRadioboxChange = (e) => {
        const {name, value} = e.target;
        setAgrees((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    // 상위 컴포넌트에서 데이터 사용할 수 있도록 넘김
    useImperativeHandle(ref, () => ({
        getAgreed: () => agrees,
        reset: () => setAgrees({}),
    }))

    return (
        <Section.Basic>
            {
                AGREE_ITEMS.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center mb-3">
                        {item.label && <span className="font-semibold mr-3">{item.label}</span>}

                        {item.options.map((opt) => (
                            <RadioBox
                                key={opt.value}
                                name={item.name}
                                value={opt.value}
                                checked={agrees[item.name] === opt.value}
                                onChange={handleRadioboxChange}
                                label={opt.label}
                            />
                        ))}
                    </div>
                ))
            }
        </Section.Basic>
    )
}
export default forwardRef(AgreeItem);