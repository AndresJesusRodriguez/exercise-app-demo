import { useState, useCallback, useEffect } from "react";

export default function Timer() {
    let [timer, setTimer] = useState(0);
    let [curTime, setCurTime] = useState(Date.now());
    let [time, setTime] = useState(0);
    let [running, setRunning] = useState(false);

    useEffect(() => {
        if (running) {
            let newTimer = setInterval(() => { setCurTime(prev => prev + 1) }, 1000 / 30)
            setTimer(newTimer);
            return () => clearInterval(newTimer)
        }
    }, [running]
    );
    let click = useCallback(
        () => {
            console.log("Click " + running)
            if (running) {
                console.log("Clearing time " + timer);
                setTime(Date.now() - curTime);
                clearInterval(Timer);
                setRunning(false);
            } else {
                console.log("starting time")
                setRunning(true);
                clearInterval(timer);
                setCurTime(Date.now())
                let timer = setInterval(() => setCurTime(prev => prev + 1), 1000 / 30);
                setTimer(timer);
            }
        }, [running, timer]
    )
    return <p>{running ? (Date.now() - curTime) / 1000 : time} <button onClick={click}
    >{running ? "Stop" : "Start"}</button></p>
    // 1. Use the useState hook to create a state variable for the timer
    // 2. Use the useState hook to create a state variable for the timer's status (running/stopped)
    // 3. Render a button that, when clicked, starts the timer if it's stopped and stops it if it's running
    // 4. Use the useEffect hook to update the timer state every second while the timer is running
    // 5. Render the current time in seconds.
}