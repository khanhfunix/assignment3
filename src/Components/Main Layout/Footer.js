import classes from "./Footer.module.css";

const DUMMY_DATA = [
  {
    title: "CUSTOMERS SERVICE",
    link: [
      "Help & Contact Us",
      "Returns & Refunds",
      "Online Stores",
      "Terms Conditions",
    ],
  },
  {
    title: "COMPANY",
    link: ["What We do", "Available Services", "Latest Posts", "FAQs"],
  },
  {
    title: "SOCIAL MEDIA",
    link: ["Twitter", "Instagram", "Facebook", "Pinterest"],
  },
];
function Footer() {
  return (
    <footer className={classes.footer}>
      {DUMMY_DATA.map((e) => {
        return (
          <div className={classes.footerList} key={e.title}>
            {e.title}
            <ul>
              {e.link.map((link) => {
                return (
                  <li className={classes.footerItem} key={link}>
                    <a href="#">{link}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </footer>
  );
}

export default Footer;
