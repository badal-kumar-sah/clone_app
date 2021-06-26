import React from "react";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

function Header(props) {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>
      <img
        src="https://www.pngkit.com/png/full/73-730019_tinder-logo-transparent-tinder-logo-png.png"
        alt=""
        className="header_logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
}

// Header.propTypes = {};

export default Header;
