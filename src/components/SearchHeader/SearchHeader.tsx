import React, { useState } from "react";
import { Style } from "util";
import { useForm, useController, Control } from "react-hook-form";
import { Button } from "../Button/Button";
import { DropDown } from "../DropDown/DropDown";
import { InputBox } from "../InputBox/InputBox";

import "./searchHeader.css";

type SomeType = "small" | "medium" | "large";

interface SearchHeaderProps {
  title?: string;
  size?: SomeType;
  backgroundColor?: Style;
  primary?: boolean;
}

type FormValues = {
  source: string;
  destination: string;
};

export const SearchHeader = ({
  primary,
  size,
  backgroundColor,
  ...props
}: SearchHeaderProps) => {
  const mode = primary ? "searchHeader--primary" : "searchHeader--secondary";

  const { handleSubmit, control, register } = useForm({
    defaultValues: {
      source: "",
      destination: "",
      count: "",
      firstName: ""
    },
    mode: "onChange",
  });


  const onSubmit = (data: any) => console.log(data);

  return (
    <div
      className={["searchHeader", `searchHeader--${size}`, mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
    >
      <input
       type="number"
        {...register("count", {
          min: {
            value: 3,
            message: 'error message' // JS only: <p>error message</p> TS only support string
          },
          
          validate: {
            positive: (v) => parseInt(v) > 0 || "should be greater than 0",
            lessThanTen: (v) => parseInt(v) < 10 || "should be lower than 10",
            
          },
        })}
      />
      <input
       type="firstName"
        {...register("firstName", {
          minLength: {
            value: 3,
            message: 'error message' // JS only: <p>error message</p> TS only support string
          },
          pattern: {
            value: /[A-Za-z]{3}/,
            message: 'error message' // JS only: <p>error message</p> TS only support string
          },
          //custom validations
          validate: {
            positive: (v) => parseInt(v) > 0 || "should be greater than 0",
            lessThanTen: (v) => parseInt(v) < 10 || "should be lower than 10",
            // you can do asynchronous validation as well
            // checkUrl: async (input) => (await fetch(input)) || "error message", // JS only: <p>error message</p> TS only support string
            messages: (v) => !v && ["test", "test2"],
          },
        })}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="searchBar">
          {/* <p className="error">{errors.source?.message}</p> */}
          <div className="searchBox">
            <InputBox
              name="source"
              rules={{ required: true }}
              control={control}
              label="Source"
              placeholder="Source"
            />
          </div>
          {/* <p className="error">{errors.destination?.message}</p> */}
          <div className="searchBox">
            <InputBox
              name="destination"
              rules={{ required: true }}
              control={control}
              label="Destination"
              placeholder="Destination"
            />
          </div>
          {/* <div className="searchBox">
            <DropDown  {...register("passengers", {required : true, minLength: 3})} label="No. of passengers" />
          </div> */}
          <div className="searchBar-buttons">
            <div className="button">
              <Button
                type="submit"
                backgroundColor="green"
                size="small"
                label="Submit"
              />
            </div>
            <div className="button">
              <Button
                type="reset"
                backgroundColor="red"
                size="small"
                label="Reset"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
