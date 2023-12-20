import { useEffect, useState } from "react";
import classes from "./RelatedProduct.module.css";

function RelatedProduct({ relatedCategory, navigate, setQuantity, id }) {
  // component hien thi relate product
  const [relatedProducts, setRelatedProducts] = useState(undefined);
  const categoryUrl = `http://localhost:5000/product/category/${relatedCategory}`;

  const fetchRelatedProducts = async (url) => {
    try {
      const response = await fetch(url);
      if (response.status !== 200) {
        window.alert("Something went wrong!");
      }
      let relatedData;
      const data = await response.json();
      relatedData = data.result;
      const currentProductIndex = relatedData.findIndex((product) => {
        return product._id === id;
      });
      relatedData.splice(currentProductIndex, 1);

      setRelatedProducts(relatedData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (relatedCategory) {
      fetchRelatedProducts(categoryUrl);
    }
  }, [relatedCategory, id]);
  return (
    <div className={classes.relatedProduct}>
      {relatedProducts &&
        relatedProducts.map((product) => {
          return (
            <div key={product._id}>
              <img
                onClick={() => {
                  navigate(`/detail/${product._id}`);
                  setQuantity(1);
                }}
                src={product.images[0]}
                alt={product.name}
              ></img>
              <h5>{product.name}</h5>
              <p>{Number(product.price).toLocaleString("de-DE")}</p>
            </div>
          );
        })}
    </div>
  );
}

export default RelatedProduct;
