import React from "react";
import styles from "./styles.module.css";
import {ReactComponent as X} from "../../assets/1x1.svg";
import {ReactComponent as Y} from "../../assets/2x2.svg";
import {ReactComponent as Z} from "../../assets/3x3.svg";

const Grid = ({ view, setView }) => {
  return (
    <div className={styles.gridAlign}>
      {/* {[z, y, x].map((img, i) => ( */}
        <a
          key={0}
          onClick={() => setView(0 + 1)}
          className={0 + 1 === view ? styles.selected : null}
          href="#!"
        >
          {/* <img src={img} alt={`${3 - i}x${3 - i}`} /> */}
          <Z/>
        </a>
        <a
          key={1}
          onClick={() => setView(1 + 1)}
          className={1 + 1 === view ? styles.selected : null}
          href="#!"
        >
          {/* <img src={img} alt={`${3 - i}x${3 - i}`} /> */}
          <Y/>
        </a>
        <a
          key={2}
          onClick={() => setView(2 + 1)}
          className={2 + 1 === view ? styles.selected : null}
          href="#!"
        >
          {/* <img src={img} alt={`${3 - i}x${3 - i}`} /> */}
          <X/>
        </a>
      {/* ))} */}
    </div>
  );
};

export default Grid;
