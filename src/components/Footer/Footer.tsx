import React from "react";
import { Style } from "util";

import "./footer.css";

type SomeType = "small" | "medium" | "large";

interface FooterProps {
  label?: string;
  size?: SomeType;
  backgroundColor?: Style;
  primary?: boolean;
  footerText: string;
  linkText?: string;
  link?: string;
}

export const Footer = ({
  label,
  size = "large",
  primary = false,
  backgroundColor,
  footerText,
  link, 
  linkText,
  ...props
}: FooterProps) => {
  const mode = primary ? "footer--primary" : "footer--secondary";
  return (
    <div 
      className={["footer", `footer--${size}`, mode].join(
        " "
      )}
      style={backgroundColor && { backgroundColor }}
      >
        {footerText} {" "}<a href={link} target="_blank">{linkText}</a>
      </div>
  );
};
