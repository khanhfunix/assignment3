import { categorieActions } from "../../../store/categorie";
import { useDispatch } from "react-redux";

import classes from "./CategoriesBar.module.css";

const searchBar = [
  {
    style: { color: "white", backgroundColor: "black" },
    title: "APPLE",
    item: ["All"],
    isActive: false,
  },
  {
    title: "IPHONE & MAC",
    item: ["iphone", "ipad", "macbook"],
    isActive: false,
  },
  {
    title: "WIRELESS",
    item: ["airpod", "watch"],
    isActive: false,
  },
  {
    title: "OTHER",
    item: ["mouse", "keyboard", "other"],
    isActive: false,
  },
];

function CategoriesBar() {
  const dispatch = useDispatch();

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
                    }}
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
