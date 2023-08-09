import classes from "./More.module.css";

function More() {
  return (
    <div className={classes.more}>
      <div className={classes.moreAds}>
        <div>
          <h2>FREE SHIPPING</h2>
          <p>Free shipping worldwide</p>
        </div>
        <div>
          <h2>24 x 7 SERVICE</h2>
          <p>Free shipping worldwide</p>
        </div>
        <div>
          <h2>FESTIVAL OFFER</h2>
          <p>Free shipping worldwide</p>
        </div>
      </div>
      <div className={classes.moreForm}>
        <div>
          <h2>FESTIVAL OFFER</h2>
          <p>Free shipping worldwide</p>
        </div>
        <div>
          <form>
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
            ></input>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default More;
