import React from "react";
import { Style } from "util";

import "./dropDown.css";

type SomeType = "small" | "medium" | "large";

interface DropDownProps {
  label: string;
  size?: SomeType;
  backgroundColor?: Style;
  primary?: boolean;
}

export const DropDown = ({
  label,
  size = "large",
  primary = false,
  backgroundColor,
  ...props
}: DropDownProps) => {
  const mode = primary ? "dropDown--primary" : "dropDown--secondary";
  return (
    <div>
      <label htmlFor="cars">{label}</label>
      <br/>
      <select
        name="cars"
        id="cars"
        className={["dropDown", `dropDown--${size}`, mode].join(
          " "
        )}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
      </select>
    </div>
  );
};
