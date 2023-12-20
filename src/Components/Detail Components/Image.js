import { useState } from "react";
import classes from "./Image.module.css";

function Image({ product }) {
  // Component hien thi hinh anh detailPage
  const [mainImg, setMainImg] = useState();

  return (
    <div className={classes.productImg}>
      {product.images && (
        <div className={classes.allImg}>
          {product.images.map((image, index) => {
            return (
              <img
                key={index}
                onClick={() => {
                  setMainImg(image);
                }}
                src={image}
                alt={`img${index + 1}`}
              />
            );
          })}
        </div>
      )}
      {product.images && (
        <div className={classes.mainImg}>
          <img
            src={mainImg ? mainImg : product.images[3]}
            alt="active-img"
          ></img>
        </div>
      )}
    </div>
  );
}

export default Image;
