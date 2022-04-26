import React from "react";

export default function ClickCounter(props: any) {
    // Get rid of this repetitive code using render props
    // const [count, setCount] = useState(0);

    // function incrementCounter() {
    //     setCount((prevCount) => prevCount + 1);
    // }
    return <button onClick={props.incrementCounter}>Clicked {props.count} times</button>;
}
