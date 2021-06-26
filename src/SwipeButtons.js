import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton href="/" className="swipeButtons__reply swipeButtons__inner">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__close swipeButtons__inner">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star swipeButtons__inner">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__favourite swipeButtons__inner">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__flash swipeButtons__inner">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
