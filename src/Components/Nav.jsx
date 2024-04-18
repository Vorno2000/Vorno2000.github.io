import styles from "../Stylesheets/NavStyle.module.css";
import { NavLink } from "react-router-dom";

function Nav() {
  const activeLink = {
    color: "red",
    backgroundColor: "rgb(54, 54, 54)",
  };

  return (
    <>
      <nav className={styles["nav-container"]}>
        <h1>Vaughn Carroll</h1>

        <div className={styles["nav-links"]}>
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeLink : null)}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeLink : null)}
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeLink : null)}
                to={"/skills"}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeLink : null)}
                to={"/projects"}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeLink : null)}
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
