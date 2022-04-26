import React from "react";
import Department from "../Department/Department";
import DisplayList from "../DisplayList/DisplayList";
import Project from "../Project/Project";

export default function RenderProps() {
    return (
        <React.Fragment>
            <Department render={(data: Array<string>) => <DisplayList list={data} />} />
            <Project render={(data: Array<string>) => <DisplayList list={data} />} />
        </React.Fragment>
    )
}