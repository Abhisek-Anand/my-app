import React, { HTMLInputTypeAttribute, useState } from "react";
import { Control, useController } from "react-hook-form";
import { NumberLiteralType } from "typescript";
import { Url } from "url";
import { Style } from "util";

import "./mouse.css";

export const Mouse = ( props : any) => {
  const [mouse, setMouse] = useState({
      x: "",
      y: ""
  })
  const [y, setY] = useState("")

  const handleMouseMove=(event: any)=> {
      setMouse({x : event.clientX, y : event.clientY })
    
  }


  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
  
          {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
          {props.render(mouse)}
    </div>
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
