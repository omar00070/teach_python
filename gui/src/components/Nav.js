import React, { useState } from "react";
import { NavItem } from "./NavItem";
import { NavContainer } from "../containers/NavContainer";

export const Nav = ({ isAuthenticated, logout, username }) => {
  const [active, setActive] = useState(false);
  const handleClick = (e) => {
    setActive(!active);
    if (e.target.innerText === "LOGOUT") logout();
  };
  return (
    <>
      <NavContainer
        active={active}
        isAuthenticated={isAuthenticated}
        handleClick={handleClick}
      >
        {isAuthenticated ? (
          <NavItem
            name="profile"
            linkTo={`/profile/${username}`}
            handleClick={handleClick}
            active={active}
          />
        ) : null}

        <NavItem
          name="home"
          linkTo="/"
          handleClick={handleClick}
          active={active}
        />
        <NavItem
          name="Learn"
          linkTo="/assignments"
          handleClick={handleClick}
          active={active}
        />
        <NavItem
          name={isAuthenticated ? "Logout" : "Login"}
          linkTo={isAuthenticated ? "/" : "/login/"}
          handleClick={handleClick}
          active={active}
        />
      </NavContainer>
    </>
  );
};
