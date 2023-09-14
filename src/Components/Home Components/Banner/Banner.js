import { Link } from "react-router-dom";
import classes from "./Banner.module.css";

function Banner() {
  // Banner component
  return (
    <div className={classes.banner}>
      <div className={classes.bannerContent}>
        <p>NEW INSPIRATION 2020</p>
        <h1>20% OFF ON NEW SEASON</h1>
        <Link to="/shop">Browse collections</Link>
      </div>
    </div>
  );
}

export default Banner;
