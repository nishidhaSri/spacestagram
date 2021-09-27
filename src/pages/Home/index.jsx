import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Card from "../../components/Card/index";
import Grid from "../../components/Grid";
import api_key from "../../config";
import styles from "./styles.module.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const [view, setView] = useState(1);

  const loader = useRef(null);

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    // initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  useEffect(() => {
    // here we simulate adding new posts to List
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=9`)
      .then((res) => {
        setData(data.concat(res.data));
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [page]);

  // here we handle what happens when user scrolls to Load More div
  // in this case we just update page variable
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("images")) {
      let arr = [];
      localStorage.setItem("images", JSON.stringify(arr));
    }
  }, []);

  return (
    <div className={styles.root}>
      <div>
        <Grid view={view} setView={setView} />
        <div className={styles.cardHolder}>
          {data.map((img, index) => (
            <Card details={img} key={index} viewType={view} />
          ))}
        </div>
        <div className="loading" ref={loader}>
          <h2>Load More</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
