import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../store/cart";
import Image from "./Image";

import classes from "./Detail.module.css";
import ProductContent from "./ProductContent";
import ProductDetail from "./ProductDetail";
import RelatedProduct from "./RelatedProduct";

const cartArr = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

function Detail() {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const cartItem = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();

  const id = useParams().productId;
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      let productCategory;
      let newRealatedProduct = [];

      const data = await response.json();

      for (let i = 0; i < data.length; i++) {
        if (id === data[i]._id.$oid) {
          setProduct(data[i]);
          productCategory = data[i].category;
        }
      }
      for (let i = 0; i < data.length; i++) {
        if (productCategory === data[i].category) {
          newRealatedProduct.push(data[i]);
          setRelatedProduct(newRealatedProduct);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const increaseQuantityHandler = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantityHandler = () => {
    setQuantity((prev) => {
      if (prev === 0) {
        return (prev = 0);
      } else {
        return prev - 1;
      }
    });
  };

  const addCartHandler = () => {
    let newCart = {
      id: product._id.$oid,
      title: product.name,
      price: product.price,
      quantity,
      totalPrice: quantity * product.price,
    };
    console.log(newCart);
    // dispatch(cartActions.addCart(newCart));
  };
  console.log(213123);
  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div className={classes.DetailContent}>
      <div className={classes.detailFLex}>
        <Image product={product} />
        <ProductContent
          product={product}
          onIncrease={increaseQuantityHandler}
          onDecrease={decreaseQuantityHandler}
          quantity={quantity}
          onAdd={addCartHandler}
        />
      </div>
      <ProductDetail product={product} />
      <RelatedProduct relatedProduct={relatedProduct} navigate={navigate} />
    </div>
  );
}

export default Detail;
