import classes from "./RelatedProduct.module.css";

function RelatedProduct({ relatedProduct, navigate, setQuantity }) {
  // component hien thi relate product
  return (
    <div className={classes.relatedProduct}>
      {relatedProduct.map((e) => {
        return (
          <div key={e._id.$oid}>
            <img
              onClick={() => {
                navigate(`/detail/${e._id.$oid}`);
                setQuantity(1);
              }}
              src={e.img1}
              alt={e.name}
            ></img>
            <h5>{e.name}</h5>
            <p>{Number(e.price).toLocaleString("de-DE")}</p>
          </div>
        );
      })}
    </div>
  );
}

export default RelatedProduct;
