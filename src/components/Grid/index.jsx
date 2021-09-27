import React from "react";
import styles from "./styles.module.css";
import x from "../../assets/1x1.svg";
import y from "../../assets/2x2.svg";
import z from "../../assets/3x3.svg";

const Grid = ({ view, setView }) => {
  return (
    <div className={styles.gridAlign}>
      {[z, y, x].map((img, i) => (
        <a
          key={i}
          onClick={() => setView(i + 1)}
          className={i + 1 === view ? styles.selected : null}
          href="#!"
        >
          <img src={img} alt={`${3 - i}x${3 - i}`} />
        </a>
      ))}
    </div>
  );
};

export default Grid;
