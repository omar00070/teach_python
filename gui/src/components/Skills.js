import { SkillListItem } from "./SkillListItem";
import React, { useState, useEffect } from "react";
import { SkillSection } from "../containers/SkillSection";
import axios from "axios";

export const Skills = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("http://127.0.0.1:8000/api/learngrid/listitem/").then((res) => {
      setData(res.data);
    });
  };
  useEffect(getData, []);

  return (
    <SkillSection>
      {data.map((item) => (
        <SkillListItem content={item.content} key={item.id} />
      ))}
    </SkillSection>
  );
};
