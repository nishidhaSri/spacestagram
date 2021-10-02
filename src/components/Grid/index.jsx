import React from "react";
import styles from "./styles.module.css";
import {ReactComponent as X} from "../../assets/1x1.svg";
import {ReactComponent as Y} from "../../assets/2x2.svg";
import {ReactComponent as Z} from "../../assets/3x3.svg";

const Grid = ({ view, setView }) => {

  // Required to render the svgs  
  const list = [<Z/>,<Y/>,<X/>]

  return (
    <div className={styles.gridAlign}>
      {[Z, Y, X].map((image, i) => (
        <a
          key={i}
          onClick={() => setView(i + 1)}
          className={i + 1 === view ? styles.selected : null}
          href="#!"
        >
          {/* img tag cannot be used here since the colour of svg
          needs to change according to the theme  */}
          {list[i]}
        </a>
       ))} 
    </div>
  );
};

export default Grid;
