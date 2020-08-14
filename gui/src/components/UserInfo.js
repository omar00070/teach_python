import React, { useState } from "react";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
const loginFieldStyles = {
  position: "relative",
};

const iconStyles = {
  position: "absolute",
  top: "50%",
  left: "7px",
  fontSize: "1.8rem",
  transform: "translateY(-50%)",
};

const UserInfo = (props) => {
  const [values, setValues] = useState({ username: props.username });

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues((oldValues) => {
      return {
        ...oldValues,
        [name]: value,
      };
    });
  };

  return (
    <div className="list-card user-info-card">
      <from>
        <div className="user-info-content">
          <h2 className="uf-title">User Information</h2>
          <div className="uf-container">
            <label htmlFor="username">Username</label>
            <div className="form-item login uf-item" style={loginFieldStyles}>
              <AiOutlineUser style={iconStyles} className="login-icon" />

              <input
                type="text"
                name="username"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="uf-container">
            <label htmlFor="email">Email</label>
            <div className="form-item login uf-item" style={loginFieldStyles}>
              <AiOutlineMail style={iconStyles} className="login-icon" />

              <input
                type="text"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="uf-container">
            <label htmlFor="firstname">First Name</label>
            <div className="form-item login uf-item" style={loginFieldStyles}>
              <FaRegUserCircle style={iconStyles} className="login-icon" />

              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={values.firstname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="uf-container">
            <label htmlFor="lastname">Last Name</label>
            <div className="form-item login uf-item" style={loginFieldStyles}>
              <FaRegUserCircle style={iconStyles} className="login-icon" />

              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={values.lastname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="uf-container">
            <button className="login-btn uf-btn">Update</button>
          </div>
        </div>
      </from>
    </div>
  );
};

export default UserInfo;
