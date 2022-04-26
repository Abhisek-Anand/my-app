import React, { useState } from "react";

function Department(props: any) {
    const [departmentList, setDepartmentList] = useState(["Physics", "Chemistry", "Mathematics"]);
    return (
        <div>
            <div>Department List:</div>
            {props.render(departmentList)}
        </div>
    );
}

export default Department;
