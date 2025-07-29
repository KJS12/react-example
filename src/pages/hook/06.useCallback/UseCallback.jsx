/**
 * useCallback( () => {
 * }, [dependency]);
 * @returns
 */
import { useCallback, useEffect, useState } from "react";
import Box from "./Box";
import { CodeViewerContainer } from "../../../components";
import codeViewer from "./codeViewer";
import { ButtonBox, InputBox } from "../../../shared/inputs";

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
            <CodeViewerContainer
                title={"useCallback"}
                files={{
                    "설명": codeViewer.description,
                    "useCallback": codeViewer.useCallback,
                    "example": codeViewer.example,
                }}
            />
            <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <ButtonBox label={toggle.toString()} onClick={() => setToggle(!toggle)} />
                    <ButtonBox label="Call SomeFunc" onClick={someFunction} />
                </div>
                <div className={`grid grid-cols-2 gap-3 ${isDark ? 'bg-black' : 'bg-white'}`}>
                    {/* <div className="flex justify-start col-span-2"> */}
                        <input
                            type="number"
                            value={size}
                            step={10}
                            onChange={(e) => setSizes(e.target.value)}
                        />
                        <ButtonBox label="Change Theme" onClick={() => setIsDark(!isDark)}/>
                    {/* </div> */}
                    <Box createBoxStyle={createBoxStyle} />
                </div>
            </div>
        </div>
    )
}

export default UseCallback;