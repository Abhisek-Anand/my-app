import React from "react";
import "./dropDown.css";

type DropdownProps = {
    options: Array<number>;
};

const Dropdown = ({ options }: DropdownProps) => {
    return (
        <select>
            {options.map((option: number) => (
                <option key={option}>{option}</option>
            ))}
        </select>
    );
};

export default Dropdown;
