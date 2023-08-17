import classes from "./HeaderList.module.css";

function HeaderList() {
  return (
    <div className={classes.headerList}>
      <div>IMAGE</div>
      <div className={classes.product}>PRODUCT</div>
      <div>PRICE</div>
      <div>QUANTITY</div>
      <div>TOTAL</div>
      <div>REMOVE</div>
    </div>
  );
}

export default HeaderList;
