import { useRef } from "react";

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