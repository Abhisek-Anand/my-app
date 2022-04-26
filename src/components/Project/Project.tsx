import React, { useState } from "react";

function Project(props: any) {
    const [projectList, setProjectList] = useState(['P-1', 'P-2', 'P-3']);
    return (
        <div>
            <div>Project List:</div>
            {props.render(projectList)}
        </div>
    );
}

export default Project;