import { categorieActions } from "../../../store/categorie";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";

import classes from "./CategoriesBar.module.css";

const searchBar = [
  {
    style: { color: "white", backgroundColor: "black" },
    title: "APPLE",
    item: ["All"],
  },
  {
    title: "IPHONE & MAC",
    item: ["iphone", "ipad", "macbook"],
  },
  {
    title: "WIRELESS",
    item: ["airpod", "watch"],
  },
  {
    title: "OTHER",
    item: ["mouse", "keyboard", "other"],
  },
];

function CategoriesBar() {
  const dispatch = useDispatch();
  const ref = useRef();
  const [isActive, setIsActive] = useState("All");

  return (
    <div className={classes.categoriesBar}>
      <h1>Categories</h1>
      {searchBar.map((e) => {
        return (
          <div className={classes.mainMenu} key={e.title}>
            <h3 style={e.style}>{e.title}</h3>
            {e.item.map((i) => {
              return (
                <div key={i}>
                  <p
                    onClick={() => {
                      dispatch(categorieActions.setCategorie(i));
                      setIsActive(i);
                    }}
                    ref={ref}
                    className={isActive === i ? classes.active : undefined}
                  >
                    {i}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default CategoriesBar;
