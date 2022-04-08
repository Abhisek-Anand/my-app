import React from "react";
import { Style } from "util";
import { Button } from "../Button/Button";
import { HeaderText } from "../HeaderText/HeaderText";

import "./card.css";

type SomeType = "small" | "medium" | "large";

interface CardProps {
  source: string;
  title?: string;
  destination: string;
  arrivalTime?: string;
  departureTime?: string;
  flightCompany: string;
  size?: SomeType;
  backgroundColor?: string;
  primary?: boolean;
}

export const Card = ({
    primary, title, source, destination, backgroundColor,arrivalTime="02:00 PM", departureTime="04:00 PM",flightCompany,
  ...props
}: CardProps) => {
  const mode = primary ? "dropDown--primary" : "dropDown--secondary";
  return (
    <div className="card" style={{backgroundColor}}>
      <div className="cardHeader">
        <HeaderText primary color="Purple" label={flightCompany} size="medium" />
      </div>
      <div className="cardHeader">
        <HeaderText primary={false} label="Flight Details:" color="black" size="medium" />
      </div>
      <br />
      {source} to {destination}
      <br />
      {arrivalTime} - {departureTime}
      <div className="priceSection">
        <HeaderText  color="black" primary={false} label="6475" size="medium" />
        <Button primary label="Buy" size="small" />
      </div>
    </div>
  );
};
