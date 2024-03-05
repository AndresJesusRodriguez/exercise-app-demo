import { useState, useEffect } from "react";

export default function StopWatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

    const startAndStop = () => {
        setIsRunning(!isRunning);
    };

    const reset = () => {
        setTime(0);
    };

    return (
        <div>
            <p>
                {hours}:{minutes.toString().padStart(2, '0')}:
                {seconds.toString().padStart(2, '0')}:
                {milliseconds.toString().padStart(2, '0')}
            </p>
            <div>
                <button onClick={startAndStop}>
                    {isRunning ? "stop" : "start"}
                </button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    );
};