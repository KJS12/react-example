import { useEffect, useState } from "react";

export const useDebounce = (value, delay=1000) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timerId = setTimeout(() => {
            // console.log("콜백호출");
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timerId);
        }
    }, [value, delay]);

    return debouncedValue;
}