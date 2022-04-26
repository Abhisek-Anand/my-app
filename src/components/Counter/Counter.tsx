import React, { useState } from "react";

export function Counter(props: any) {
    const [count, setCount] = useState(0);

    function incrementCounter() {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div>
            {props.render(count, incrementCounter)}
        </div>
    );
}