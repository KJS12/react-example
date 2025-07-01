/**
 * useCallback( () => {
 * }, [dependency]);
 * @returns
 */
import { useCallback, useEffect, useState } from "react";
import Box from "./Box";

const UseCallback = () => {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);
    const [size, setSizes] = useState(100);
    const [isDark, setIsDark] = useState(false);

    const someFunction = useCallback(() => {
        console.log(`SomeFuc: number: ${number}`);
        return;
    }, [number]);

    useEffect(() => {
        console.log(`someFunction이 변경되었습니다.`);
    }, [someFunction]);

    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor: 'pink',
            width: `${size}px`,
            height: `${size}px`,
        }
    }, [size]);

    return (
        <div>
            <div className="container-line">
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <br/>
                <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
                <br/>
                <button onClick={someFunction}>Call SomeFunc</button>
            </div>
            <div
                className="container-line"
                style={{background: isDark ? 'black' : 'white',}}
            >
                <input
                    type="number"
                    value={size}
                    step={10}
                    onChange={(e) => setSizes(e.target.value)}
                />
                <br/>
                <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
                <Box createBoxStyle={createBoxStyle} />
            </div>
        </div>
    )
}

export default UseCallback;