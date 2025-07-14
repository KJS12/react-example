const codeViewer = {
description:
`Throttle
- 함수가 한번 호출되면, 일정 시간이 지나기 전에 다시 호출되지 않도록 막는 것
`,

useThrottle:
`import { useRef } from "react";

export const useThrottle = (callback, delay=1000) => {
    const lastRun = useRef(Date.now());

    return () => {
        const timeElapsed = Date.now() - lastRun.current;

        if(timeElapsed >= delay) {
            callback();
            lastRun.current = Date.now();
        }
    };
}
`,

example:
`import { useState } from "react";
import { useThrottle } from "./useThrottle";

const Throttle = () => {
    const [lottoNumbers, setLottoNumbers] = useState([0, 0, 0, 0, 0, 0]);

    const handleClick = useThrottle(() => {
        const result = hackLottoNumbers();
        setLottoNumbers(result);
    }, 1000);

    return (
        <div className="container">
            <div className="title">로또번호 맞춰줄게</div>
            <button className="button" onClick={handleClick}>번호 맞추기</button>
            <div className="numbers">
                {lottoNumbers.map((number, idx) => (
                    <span key={idx} className="number">
                        {number}
                    </span>
                ))}
            </div>
        </div>
    )
}

const hackLottoNumbers = () => {
    console.log("로또 번호 랜덤 생성중....");
    const lottoNumbers = [];
    for (let i = 0; i < 6; i++) {
        const number = Math.floor(Math.random() * 45) + 1;
        lottoNumbers.push(number);
    }
    return lottoNumbers;
}

export default Throttle;
`,
}

export default codeViewer;