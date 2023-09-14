import { categorieActions } from "../../../store/categorie";
import { useDispatch } from "react-redux";
import { useState } from "react";

import classes from "./CategoriesBar.module.css";
// dummy array de hien thi du lieu de dang hon
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
  // component hien thi filter
  // khai bao state va action tu redux
  const dispatch = useDispatch();
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
                    // logic hien thi categorie active
                    onClick={() => {
                      dispatch(categorieActions.setCategorie(i));
                      setIsActive(i);
                    }}
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
