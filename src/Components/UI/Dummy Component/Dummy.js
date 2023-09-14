import classes from "./Dummy.module.css";

function Dummy({ content, link }) {
  // component link giua cac trang
  return (
    <div className={classes.dummy}>
      <div>
        <h1>{content}</h1>
      </div>
      <div className={classes.link}>{link}</div>
    </div>
  );
}

export default Dummy;
