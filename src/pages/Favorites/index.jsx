import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Grid from "../../components/Grid";
import styles from "../Home/styles.module.css";

const Favorites = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState(1);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("images")));
  }, []);
  return (
    <div className={styles.root}>
      <div>
        <Grid view={view} setView={setView} />
        <div className={styles.cardHolder}>
          {data.map((img, index) => (
            <Card details={img} key={index} viewType={view} liked={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
