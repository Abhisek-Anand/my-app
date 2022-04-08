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

const { handleSubmit, control } = useForm({
    defaultValues: {
        source: "",
        destination: "",
    },
    mode: "onChange"
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div
      className={["searchHeader", `searchHeader--${size}`, mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
    >
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
