import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import classes from "./Detail.module.css";

function Detail() {
  const [product, setProduct] = useState();
  const id = useParams().productId;
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          if (id === data[i]._id.$oid) {
            setProduct(data[i]);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  });
  console.log(product);

  return (
    <div className={classes.DetailContent}>
      <h1>{product.category}</h1>
    </div>
  );
}

export default Detail;
