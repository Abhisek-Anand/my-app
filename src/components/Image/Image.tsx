import React from "react";
import "./image.css";

type ImageProps = {
    src: string;
    altText: string;
};

export const Image = ({ src, altText }: ImageProps) => {
    return <img src={src} alt={altText} />;
};
