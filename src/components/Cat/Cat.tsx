import React, { HTMLInputTypeAttribute, useState } from "react";
import { Control, useController } from "react-hook-form";
import { NumberLiteralType } from "typescript";
import cat from "../../stories/assets/cat.svg"

import "./cat.css";

export const Cat = ( props : any) => {
  
  const mouse = props.mouse;
  console.log(mouse.x);
  console.log(mouse.y);
    return (
      <img src={cat} style={{ position: 'absolute', left: `${mouse.x}px`, top: mouse.y, height: "10rem", width: "10rem" }} />
    );
};

// class Mouse extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleMouseMove = this.handleMouseMove.bind(this);
//       this.state = { x: 0, y: 0 };
//     }
  
//     handleMouseMove(event) {
//       this.setState({
//         x: event.clientX,
//         y: event.clientY
//       });
//     }
  
//     render() {
//       return (
//         <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
  
//           {/*
//             Instead of providing a static representation of what <Mouse> renders,
//             use the `render` prop to dynamically determine what to render.
//           */}
//           {this.props.render(this.state)}
//         </div>
//       );
//     }
//   }
