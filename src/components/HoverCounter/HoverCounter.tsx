import React from "react";

export default function HoverCounter(props: any) {
    // Get rid of this repetitive code using render props
    // const [count, setCount] = useState(0);

    // function incrementCounter() {
    //     setCount((prevCount) => prevCount + 1);
    // }
    return <h2 onMouseOver={props.incrementCounter}>Hovered {props.count} times</h2>;
}
