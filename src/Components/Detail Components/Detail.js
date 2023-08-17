import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../store/cart";
import Image from "./Image";

import classes from "./Detail.module.css";
import ProductContent from "./ProductContent";
import ProductDetail from "./ProductDetail";
import RelatedProduct from "./RelatedProduct";

function Detail() {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const cartRedux = useSelector((state) => state.cart);
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
      image: product.img1,
      id: product._id.$oid,
      title: product.name,
      price: product.price,
      quantity,
      totalPrice: Number(product.price) * Number(quantity),
    };
    // console.log(typeof newCart.totalPrice, newCart.totalPrice);
    dispatch(cartActions.addCart(newCart));
  };

  useEffect(() => {
    fetchProduct();

    // localStorage.setItem("cart", JSON.stringify(cart));
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
