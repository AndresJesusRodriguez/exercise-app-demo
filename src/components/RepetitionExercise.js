import { useState } from "react"

export default function RepititionExercise({ exercise, setMenuScreen }) {
    let [count, setCount] = useState(0);
    return (
        <div>
            <p>{exercise.name}</p>
            <p style={{ fontSize: "5em" }}>{count}</p>
            <button style={{ fontSize: "2em" }} onClick={() => setCount(count => count + 1)}>Increment</button>
            <button style={{ fontSize: "2em" }} onClick={() => setCount(0)}>Reset</button><br />
            <button style={{ fontSize: "1em" }} onClick={setMenuScreen}>Return ot Menu</button>
        </div>

    );
}