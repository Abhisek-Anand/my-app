import React from "react"; // 1. import React

import irdValidator from "@fnzc/nz-ird-validator"; // 2. import @fnzc packages

import { render, fireEvent, screen } from "@testing-library/react"; // 3. import third party packages

import ClickCounter from "components/ClickCounter"; // import internal components
import {Image} from "components/Image/Image"; // internal components
import AnotherParent from "parent/anotherParent";   // internal components
import ParentTest from "parent/parent";     // internal components


import DropDown from '../DropDown/DropDown';    // Parent component
import Header from "../Header/Header"; // Parent component

import ControllerTest from "./ControllerTest"; // sibling component
import SiblingTest from "./SiblingTest";    // sibling component

import Abc from "entities/abc.entity"; // 5. import entities (alphabetically)

import Something from "entities/something.entity";  // 6. import utils (alphabetically)
import FormData from "utils/data"; // utils
import Utils from "utils/index";

import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  type?: "submit" | "button" | "reset";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = "submit",
  primary = false,
  size = "medium",
  backgroundColor,
  label = "Button",
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type={type}
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
