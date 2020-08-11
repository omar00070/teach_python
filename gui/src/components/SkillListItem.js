import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

export const SkillListItem = (props) => {
  return (
    <div className="list-item">
      <div className="icon-container">
        <AiOutlineCheck className="icon" />
      </div>
      <p>{props.content}</p>
    </div>
  );
};
