import React from "react";

import "./headerText.css";

type SomeType = "small" | "medium" | "large";

interface HeaderTextProps {
  label: string;
  size?: SomeType;
  color?: string;
  primary?: boolean;
}


export const HeaderText = ({
  label = "Header",
  size = "large",
  primary = false,
  color,
}: HeaderTextProps) => {
  const mode = primary ? "headerText--primary" : "headerText--secondary";
  
  return (
    <div
      className={["headerText", `headerText--${size}`, mode].join(" ")}
      style={{color}}
    >
      {label}
    </div>
  );
};
