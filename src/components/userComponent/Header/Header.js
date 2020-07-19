import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import logo from "../../../images/logo.png";
import profile from "../../../images/profiles.jpg";
import ProfileDropdown from "../Profile/Profile";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { useHistory } from "react-router-dom";

const Header = ({
  showModalLogin,
  showModalRegister,
  user,
  auth: {
    isAuthenticated,
  }

}) => {
  let history = useHistory();
  const [isProfileDropdown, setProfileDropdown] = useState(false);

  const showProfileDropdown = () => {
    setProfileDropdown(!isProfileDropdown);
  };
  const openHome = () => {
    history.push(`/`);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img
          src={logo}
          alt="dumbflix"
          style={{ cursor: "pointer" }}
          onClick={() => openHome()}
        />
      </div>

      {!isAuthenticated && (
        <div className="button-login-register">
          <button className="btn-light" onClick={() => showModalRegister()}>
            Register
          </button>
          <button className="btn-red" onClick={() => showModalLogin()}>
            Login
          </button>
        </div>
      )}
      {isAuthenticated && (
        <div className="profile">
          <img src={profile} alt="" onClick={() => showProfileDropdown()} />
        </div>
      )}
      {isProfileDropdown && (
        <ProfileDropdown showProfileDropdown={showProfileDropdown} />
      )}
    </div>
  )
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Header);