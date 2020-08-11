import { MainSection } from "../containers/MainSection";
import { GridComponent } from "./GridComponent";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const LearnGrid = (props) => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("http://127.0.0.1:8000/api/learngrid/").then((res) => {
      setData(res.data);
    });
  };
  useEffect(getData, []);
  return (
    <MainSection>
      {data.map((item) => (
        <GridComponent
          title={item.title}
          description={item.description}
          key={item.id}
        />
      ))}
    </MainSection>
  );
};
