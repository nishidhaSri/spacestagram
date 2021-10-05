import React, { useState } from "react";
import Toggle from "react-toggle";

import {ReactComponent as Logo} from "../../assets/Vector.svg";
import {ReactComponent as Home} from "../../assets/home.svg";
import search from "../../assets/search.svg";
import {ReactComponent as Heart} from "../../assets/like.svg";
import {ReactComponent as Sun} from "../../assets/sun.svg";
import {ReactComponent as Moon} from "../../assets/moon.svg";

import styles from "./styles.module.css";
import "react-toggle/style.css";
import { withRouter } from "react-router";

const Navigation = (props) => {

  return (
    <div className={styles.stickyContainer}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          {/* <img src={logo} alt="logo" /> */}
          <Logo/>
          <span>Spacestagram</span>
        </div>
        <div className={styles.icons}>
          <Home
            onClick={() => props.history.push("/")}
          />
          {/* For future scope, can implement some kind of search option */}
          {/* <img src={search} alt="search-icon" /> */}
          <Heart
            onClick={() => props.history.push("/liked")}
          />
        </div>
        <div className={styles.toggleContainer}>
          {/* <img src={moon} alt="moon-icon" /> */}
          <Moon/>
          <Toggle
            className={styles.toggle}
            defaultChecked={props.theme==='dark'}
            icons={false}
            onChange={props.toggleTheme}
            />
          {/* <img src={sun} alt="sun-icon" /> */}
          <Sun/>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navigation);
