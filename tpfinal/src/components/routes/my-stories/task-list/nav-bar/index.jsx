import React from "react";
import "./index.scss";
import { ArrowBackIosNew, SettingsOutlined } from "@mui/icons-material";

function NavBar() {
  const handleBack = () => {
    alert("back pressed");
  };
  const handleSettings = () => {
    alert("settings pressed");
  };

  return (
    <div className="nav-bar">
      <ArrowBackIosNew
        className="icon"
        fontSize="medium"
        onClick={handleBack}
      />
      <p className="story-name">Story 1</p>
      <SettingsOutlined
        className="icon"
        fontSize="medium"
        onClick={handleSettings}
      />
    </div>
  );
}

export default NavBar;
