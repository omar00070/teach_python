import React from "react";
import { Banner } from "./Banner";
import { LearnGrid } from "../components/LearnGrid";
import { Skills } from "../components/Skills";

export const MainPage = () => {
  return (
    <>
      <Banner />
      <LearnGrid />
      <Skills />
    </>
  );
};
