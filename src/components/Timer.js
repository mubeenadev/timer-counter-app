import React, { useEffect, useState } from "react";

export const CountdownTimer = () => {
    const [count, setCount] = useState(100);

    useEffect(() => {
        const timerID = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount === 1) {
                    clearInterval(timerID);
                }
                return prevCount - 1;
            });
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);
    return (
        <div>
            <h1>Timer</h1>
            <p>Count: {count}</p>
        </div>
    );
};
