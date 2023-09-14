import classes from "./Categories.module.css";
import p1 from "./product_1.png";
import p2 from "./product_2.png";
import p3 from "./product_3.png";
import p4 from "./product_4.png";
import p5 from "./product_5.png";
import { Link } from "react-router-dom";

function Categories() {
  // component Categories
  return (
    <>
      <div className={classes.categoriesText}>
        <h4>CAREFULLY CREATED COLLECTIONS</h4>
        <h3>BROWSE OUR CATEGORIES</h3>
      </div>
      <div className={classes.categories}>
        <div className={classes.flexImg}>
          <Link to="/shop">
            <img src={p1} alt="iphone"></img>
          </Link>
          <Link to="/shop">
            <img src={p2} alt="mac"></img>
          </Link>
        </div>
        <div className={classes.flexImg}>
          <Link to="/shop">
            <img src={p3} alt="ipad"></img>
          </Link>
          <Link to="/shop">
            <img src={p4} alt="watch"></img>
          </Link>
          <Link to="/shop">
            <img src={p5} alt="airpod"></img>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Categories;
