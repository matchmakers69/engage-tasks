import classes from "./Header.module.css";
import { NavLink as RouterLink } from "react-router-dom";
import { constants } from "config/constants";

const navigationData = [
  {
    id: 1,
    text: "Task 1 - Button counter",
    url: constants.url.COMPONENT_LIFECYCLE,
  },
  {
    id: 2,
    text: "Task 2 - State management",
    url: constants.url.COMPONENT_WITH_STATE_MANAGEMENT,
  },
  {
    id: 3,
    text: "Task 3 - Users",
    url: constants.url.USERS,
  },
];

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["nav-container"]}>
        <div className={classes["menu-wrapper"]}>
          <ul className={classes["menu-list"]}>
            {navigationData.map((menuItem) => (
              <li key={menuItem.id} className={classes["menu-item"]}>
                <RouterLink end to={menuItem.url} className={classes["link-item"]}>
                  <span className={classes["link-text"]}>{menuItem.text}</span>
                </RouterLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
