import React, { useState } from "react";
import "./containers.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FaPython } from "react-icons/fa";
import { styles } from "./styles/nav_styles";

export const NavContainer = (props) => {
  const [logoStyles, setLogoStyles] = useState(styles.logoStyles);

  //optional method
  // const rotateLogo = () => {
  //   setLogoStyles((oldstyles) => ({
  //     ...oldstyles,
  //     transform: `rotate(${Math.random() * 250}deg)`,
  //   }));
  // };

  return (
    <div
      style={
        props.active
          ? props.isAuthenticated
            ? { height: "28rem" }
            : { height: "23rem" }
          : { height: "7rem" }
      }
      className="nav"
    >
      <FaPython className="logo" style={logoStyles} />

      {props.active ? (
        <AiOutlineClose
          style={styles.burgerMenuStyles}
          onClick={props.handleClick}
          className="menu-icon"
        />
      ) : (
        <AiOutlineMenu
          style={styles.burgerMenuStyles}
          onClick={props.handleClick}
          className="menu-icon"
        />
      )}
      <ul
        style={
          props.active
            ? props.isAuthenticated
              ? { opacity: "1", transform: undefined, marginTop: "5rem" }
              : { opacity: "1", transform: undefined, marginTop: "6rem" }
            : {
                opacity: "0",
                pointerEvents: "none",
                transform: "translateY(-5rem)",
              }
        }
      >
        {props.children.map((Child, n) => (
          <li key={n}>{Child}</li>
        ))}
      </ul>
    </div>
  );
};
