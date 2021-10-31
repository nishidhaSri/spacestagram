import React, { useState } from "react";
import { ReactComponent as Heart } from "../../assets/like.svg";
import { ReactComponent as Share} from "../../assets/email.svg";
import { useEffect } from "react/cjs/react.development";
import styles from "./styles.module.css";
import { earthDate } from "../../helper";
import toast, { Toaster } from 'react-hot-toast';

const Card = ({ details, key, viewType, liked }) => {
  const { url, title, date } = details;
  const [style, setstyle] = useState({
    width: 300,
  });
  const [like, setLike] = useState(liked);
  useEffect(() => {
    switch (viewType) {
      case 2:
        setstyle({ width: 400 });
        break;
      case 3:
        setstyle({ width: "100%" });
        break;
      default:
        setstyle({ width: 350 });
    }
  }, [viewType]);

  const likeImage = () => {
    let likedList = JSON.parse(localStorage.getItem("images"));
    if (like) {
      let updatedList = likedList.filter((img) => img.url !== url);
      localStorage.setItem("images", JSON.stringify(updatedList));
    } else {
      let updatedDetails = JSON.parse(JSON.stringify(details));
      likedList.push(updatedDetails);
      localStorage.setItem("images", JSON.stringify(likedList));
    }
    setLike(!like);
  };

  //function to generate sharable link
  const handleShare = () =>{
    const sharableLink = `${window.location.origin}/details?url=${url}`
    navigator.clipboard.writeText(sharableLink);
    toast.success("Link copied to clipboard")
  }

  return (
    <div key={key} className={styles.root} style={style}>
      <img src={url} alt="hd space" />
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>{earthDate(date)}</div>
        </div>
        <div className={styles.actions}>
          <Heart className={like ? styles.liked : null} onClick={likeImage} />
          <Share onClick={handleShare} />
        </div>
      </div>
    </div>
  );
};

export default Card;
