import classes from "./PageContent.module.css";

function PageContent({ children }) {
  return (
    <div className={classes.PageContent}>
      <div>{children}</div>
    </div>
  );
}

export default PageContent;
