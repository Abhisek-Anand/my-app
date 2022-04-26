import React from "react";
import ClickCounter from "../ClickCounter";
import { Counter } from "../Counter/Counter";
import HoverCounter from "../HoverCounter/HoverCounter";

export default function RenderProps2() {
    return (
        <React.Fragment>
            <Counter render={(countVal: number, incrementCounter: any) => <ClickCounter count={countVal} incrementCounter={incrementCounter} />} />
            <Counter render={(countVal: number, incrementCounter: any) => <HoverCounter count={countVal} incrementCounter={incrementCounter} />} />
        </React.Fragment>
    );
}
