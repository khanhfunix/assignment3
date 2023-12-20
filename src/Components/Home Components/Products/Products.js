import { useState, useEffect } from "react";

import { showActions } from "../../../store/showPopUp";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Products.module.css";

import PopUp from "./PopUp";

function Products() {
  // Component hien thi product o HomPage
  // khai bao state
  const [products, setProduct] = useState([]);
  const [productPopUp, setProductPopUp] = useState({});
  // khai bao dispatch action cua redex de hien thi pop up
  const dispatch = useDispatch();
  const isShowPopUp = useSelector((state) => state.show.isShowPopUp);
  // function fetch API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_ENDPOINT}product`
        );
        if (response.status !== 200) {
          window.alert("Failed to get products");
        }

        const data = await response.json();

        for (let i = 0; i < data.result.length; i++) {
          if (data.result.length > 8) {
            data.result.pop();
          }
        }
        setProduct(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);
  // logic dong cua so opopup
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

                  setProductPopUp(p);
                }}
                className={classes.productsItem}
                key={p._id}
              >
                <img
                  className={classes.productImg}
                  src={p.images[0]}
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
