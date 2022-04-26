import React from "react";

function DisplayList(props: any) {
    return (
        <ul>
            {props.list.map((item: string, index: number) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default DisplayList;
