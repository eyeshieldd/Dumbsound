import React from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheck,
  faHistory,
  faBook,
  faUserAstronaut,
  faPowerOff,
  faFileVideo,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

import { handleLogout } from "../../../redux/actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProfileDropdown = ({
  showProfileDropdown,
  handleLogout,
  auth: {
    user: { fullName, email, role },
  },
}) => {
  let history = useHistory();

  const openPayment = () => {
    history.push(`/payment`);
    showProfileDropdown();
  };

  const openTranscation = () => {
    history.push(`/transaction`);
    showProfileDropdown();
  };

  const openListArtist = () => {
    history.push(`/add-artist`);
    showProfileDropdown();
  };
  const openListMusic = () => {
    history.push(`/add-song`);
    showProfileDropdown();
  };
  const openHistory = () => {
    history.push(`/history`);
    showProfileDropdown();
  };

  const setLogout = () => {
    handleLogout();
    showProfileDropdown();
  };

  return (
    <div>
      <div className="profile-square">
        <div className="profile-arrow" />
        {role === 2 ? (
          <>
            <div className="profile-dropdown-group">
              <div className="profile-dropdown-icon">
                <FontAwesomeIcon icon={faMoneyCheck} className="icon" />
              </div>
              <div className="profile-dropdown-link">
                <span className="submenu" onClick={() => openPayment()}>
                  Pay
                </span>
              </div>
            </div>
            <div className="profile-dropdown-group">
              <div className="profile-dropdown-icon">
                <FontAwesomeIcon icon={faHistory} className="icon" />
              </div>
              <div className="profile-dropdown-link">
                <span className="submenu" onClick={() => openHistory()}>
                  History
                </span>
              </div>
            </div>
          </>
        ) : null}
        {role === 1 ? (
          <>
            <div className="profile-dropdown-group">
              <div className="profile-dropdown-icon">
                <FontAwesomeIcon icon={faUserAstronaut} className="icon" />
              </div>
              <div className="profile-dropdown-link">
                <span className="submenu" onClick={() => openListArtist()}>
                  Add Artist
                </span>
              </div>
            </div>

            <div className="profile-dropdown-group">
              <div className="profile-dropdown-icon">
                <FontAwesomeIcon icon={faFileVideo} className="icon" />
              </div>
              <div className="profile-dropdown-link">
                <span className="submenu" onClick={() => openListMusic()}>
                  Add Music
                </span>
              </div>
            </div>

            <div className="profile-dropdown-group">
              <div className="profile-dropdown-icon">
                <FontAwesomeIcon icon={faBook} className="icon" />
              </div>
              <div className="profile-dropdown-link">
                <span className="submenu" onClick={() => openTranscation()}>
                  Transcation
                </span>
              </div>
            </div>
          </>
        ) : null}

        <hr style={{ marginBottom: "18px" }} />
        <div className="profile-dropdown-group">
          <div className="profile-dropdown-icon">
            <FontAwesomeIcon icon={faPowerOff} className="icon" />
          </div>
          <div className="profile-dropdown-link">
            <span className="submenu" onClick={() => setLogout()}>
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileDropdown.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { handleLogout })(ProfileDropdown);
