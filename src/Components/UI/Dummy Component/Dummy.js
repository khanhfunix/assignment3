import classes from "./Dummy.module.css";

function Dummy({ content }) {
  return (
    <div className={classes.dummy}>
      <h1>{content}</h1>
      <h2>{content}</h2>
    </div>
  );
}

export default Dummy;
