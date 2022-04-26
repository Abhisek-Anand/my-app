import React from "react";

import { Cat } from "../Cat/Cat";
import { Mouse } from "../Mouse/Mouse";

import "./mouseover.css";

export const Mouseover = ( props : any) => {
  
  return (
    <div>
    <h1>Move the mouse around!</h1>
    <Mouse render={(mouse: any) => (
      <Cat mouse={mouse} />
    )}/>
  </div>
  );
};

