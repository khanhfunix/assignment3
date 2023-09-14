import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./ProductList.module.css";
import { useNavigate } from "react-router-dom";

function ProductList() {
  // component hien thi product
  // khai bao state va navigate
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  // khai bao redux state
  const categorieSelected = useSelector((state) => state.categorie.categorie);
  // ham fetch API
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
        setProduct(data);
        // logic hien thi product theo categorie
        if (categorieSelected === "All") {
          setProduct(data);
        } else {
          const dataFilter = data.filter((e) => {
            return e.category === categorieSelected;
          });

          setProduct(dataFilter);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [categorieSelected]);

  return (
    <div className={classes.productsList}>
      {product.map((p) => {
        return (
          <div className={classes.productsItem} key={p._id.$oid}>
            <img
              className={classes.productImg}
              src={p.img1}
              alt={p.name}
              onClick={() => {
                navigate(`/detail/${p._id.$oid}`);
              }}
            ></img>
            <h3>{p.name}</h3>
            <h4>{Number(p.price).toLocaleString("de-DE")}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
