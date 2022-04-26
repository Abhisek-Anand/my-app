import React, { HTMLInputTypeAttribute, useState } from "react";
import { Url } from "url";
import { Control, useController } from "react-hook-form";
import { NumberLiteralType } from "typescript";
import { Style } from "util";

import "./inputBox.css";

type FormValues = {
  source: string;
  destination: string;
};

interface InputBoxProps {
  label?: string;
  primary?: boolean;
  name?: string;
  placeholder?: string;
  control?: Control<FormValues>;
  rules?: {required: boolean};
}


export const InputBox = ( props : any) => {

  const { field, fieldState } = useController(props);

  return (
    <div className="inputTextBoxContainer">
      <label>{props.label}</label>
      <br />
      <input {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
      
    </div>
  );
};
