import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart";
import Image from "./Image";

import classes from "./Detail.module.css";
import ProductContent from "./ProductContent";
import ProductDetail from "./ProductDetail";
import RelatedProduct from "./RelatedProduct";

function Detail() {
  // Component chinh de hien thi Detail Page
  // Khai bao  hook useState de hien thi noi dung trang
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  // khai bao dispatch action
  const dispatch = useDispatch();
  // khai bao id de so sanh ( dung useParams)
  const id = useParams().productId;
  // khai bao useNavigate
  const navigate = useNavigate();
  // fetch API de lay du lieu
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
      // set product logic
      for (let i = 0; i < data.length; i++) {
        if (id === data[i]._id.$oid) {
          setProduct(data[i]);
          productCategory = data[i].category;
        }
      }
      // logic setRelatedProduct
      for (let i = 0; i < data.length; i++) {
        if (productCategory === data[i].category) {
          newRealatedProduct.push(data[i]);
        }
      }
      const itemRemove = newRealatedProduct.findIndex((e) => e._id.$oid === id);
      newRealatedProduct.splice(itemRemove, 1);
      setRelatedProduct(newRealatedProduct);
    } catch (error) {
      console.log(error);
    }
  };
  // logic tang quantity
  const increaseQuantityHandler = () => {
    setQuantity((prev) => prev + 1);
  };
  // logic giam quantity
  const decreaseQuantityHandler = () => {
    setQuantity((prev) => {
      if (prev === 0) {
        return (prev = 0);
      } else {
        return prev - 1;
      }
    });
  };
  // logic addCart
  const addCartHandler = () => {
    if (quantity === 0) {
      return;
    }
    let newCart = {
      image: product.img1,
      id: product._id.$oid,
      title: product.name,
      price: product.price,
      quantity,
      totalPrice: Number(product.price) * Number(quantity),
    };

    dispatch(cartActions.addCart(newCart));
  };

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
      <RelatedProduct
        relatedProduct={relatedProduct}
        navigate={navigate}
        setQuantity={setQuantity}
        id={id}
      />
    </div>
  );
}

export default Detail;
