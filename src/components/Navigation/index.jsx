import React, { useState } from "react";
import Toggle from "react-toggle";

import logo from "../../assets/Vector.svg";
import home from "../../assets/home.svg";
import search from "../../assets/search.svg";
import heart from "../../assets/like.svg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

import styles from "./styles.module.css";
import "react-toggle/style.css";
import { withRouter } from "react-router";

const Navigation = (props) => {
  const [theme, setTheme] = useState(false);
  return (
    <div className={styles.stickyContainer}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <span>Spacestagram</span>
        </div>
        <div className={styles.icons}>
          <img
            src={home}
            alt="home-icon"
            onClick={() => props.history.push("/")}
          />
          {/* For future scope, can implement some kind of search option */}
          {/* <img src={search} alt="search-icon" /> */}
          <img
            src={heart}
            alt="heart-icon"
            onClick={() => props.history.push("/liked")}
          />
        </div>
        <div className={styles.toggleContainer}>
          <img src={sun} alt="sun-icon" />
          <Toggle
            className={styles.toggle}
            defaultChecked={theme}
            icons={false}
            onChange={setTheme}
          />
          <img src={moon} alt="moon-icon" />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navigation);
