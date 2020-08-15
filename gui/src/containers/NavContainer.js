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
      className={
        props.active
          ? props.isAuthenticated
            ? "nav nav-active-auth"
            : "nav nav-active-not-auth"
          : "nav nav-non-active"
      }
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
        className={
          props.active
            ? props.isAuthenticated
              ? "active-auth"
              : "active-not-auth"
            : "non-active"
        }
      >
        {props.children.map((Child, n) => (
          <li key={n}>{Child}</li>
        ))}
      </ul>
    </div>
  );
};
