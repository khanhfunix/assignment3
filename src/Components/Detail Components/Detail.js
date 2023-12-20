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
  const [relatedCategory, setRelatedCategory] = useState("");
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
      console.log(process.env);
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}product/` + id
      );
      if (response.status !== 200) {
        window.alert("Something went wrong!");
      }

      const data = await response.json();

      // set product logic
      setProduct(data.result);
      setRelatedCategory(data.result.category);
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
    if (quantity > product.count) {
      window.alert(
        "Not enough product. Please wait until we refill the store or choose another product. Sorry for the inconvinence!!!"
      );
      return;
    }
    let newCart = {
      image: product.images[0],
      id: product._id,
      title: product.name,
      price: product.price,
      count: product.count,
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
        relatedCategory={relatedCategory}
        navigate={navigate}
        setQuantity={setQuantity}
        id={id}
      />
    </div>
  );
}

export default Detail;
