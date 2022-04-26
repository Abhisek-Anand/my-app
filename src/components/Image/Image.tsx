import React from "react";
import { Style } from "util";

import "./image.css";

type SomeType = "small" | "medium" | "large";

interface ImageProps {
  height?: string;
  width?: string;
  size?: SomeType;
  alt?: string;
  backgroundColor?: Style;
  src?: string;
  primary?: boolean;
}

export const Image = ({
    backgroundColor,
    height="100rem",
    width="100rem",
    size= "medium",
    alt= "image",
    src= "https://source.unsplash.com/random",
    primary=false,
  ...props
}: ImageProps) => {
  const mode = primary ? "image--primary" : "image--secondary";
  return (
    <img
      className={["image", `image--${size}`, mode].join(
        " "
      )}
      height={height}
      width={width}
      alt={alt}
      src={src}
      style={backgroundColor && { backgroundColor }}
      {...props}
    />
  );
};
