import { useState } from "react";
import classes from "./Image.module.css";

function Image({ product }) {
  const [mainImg, setMainImg] = useState();
  return (
    <div className={classes.productImg}>
      <div className={classes.allImg}>
        <img
          onClick={() => {
            setMainImg(product.img1);
          }}
          src={product.img1}
        ></img>
        <img
          onClick={() => {
            setMainImg(product.img2);
          }}
          src={product.img2}
        ></img>
        <img
          onClick={() => {
            setMainImg(product.img3);
          }}
          src={product.img3}
        ></img>
        <img
          onClick={() => {
            setMainImg(product.img4);
          }}
          src={product.img4}
        ></img>
      </div>
      <div className={classes.mainImg}>
        <img src={mainImg ? mainImg : product.img4}></img>
      </div>
    </div>
  );
}

export default Image;
