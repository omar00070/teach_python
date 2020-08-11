import React from "react";
import { AiOutlineGithub, AiOutlineFacebook } from "react-icons/ai";
import { footer_styles } from "./styles/footer_styles";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <AiOutlineGithub style={footer_styles.iconStyles} />
        <AiOutlineFacebook style={footer_styles.iconStyles} />
      </div>
      <h3>&#9400; PythonGroup</h3>
    </div>
  );
};
