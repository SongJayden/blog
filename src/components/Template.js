import React from "react";
import "./Template.css";

const Template = ({ children, todoLength }) => {
  return (
    <div className="Template">
      <div className="title"> Todo List for Today ({todoLength}) </div>
      <div> {children}</div>
    </div>
  );
};
export default Template;
