import { useState, useEffect } from "react";

import { showActions } from "../../../store/showPopUp";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Products.module.css";

import PopUp from "./PopUp";

function Products() {
  const [products, setProduct] = useState([]);
  const [productPopUp, setProductPopUp] = useState({});

  const dispatch = useDispatch();
  const isShowPopUp = useSelector((state) => state.show.isShowPopUp);

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

        for (let i = 0; i < data.length; i++) {
          if (data.length > 8) {
            data.pop();
          }
        }
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  const closePopUp = () => {
    dispatch(showActions.notShowPopUp());
  };

  return (
    <>
      <div className={classes.products}>
        <div className={classes.productsText}>
          <h4>MADE THE HARD WAY</h4>
          <h3>TOP TRENDING PRODUCT</h3>
        </div>
        <div className={classes.productsList}>
          {products.map((p) => {
            return (
              <div
                onClick={() => {
                  dispatch(showActions.showPopUp());
                  console.log(isShowPopUp);
                  setProductPopUp(p);
                }}
                className={classes.productsItem}
                key={p._id.$oid}
              >
                <img
                  className={classes.productImg}
                  src={p.img1}
                  alt={p.name}
                ></img>
                <h3>{p.name}</h3>
                <h4>{Number(p.price).toLocaleString("de-DE")}</h4>
              </div>
            );
          })}
        </div>
      </div>
      {isShowPopUp && <PopUp product={productPopUp} onClose={closePopUp} />}
    </>
  );
}

export default Products;
