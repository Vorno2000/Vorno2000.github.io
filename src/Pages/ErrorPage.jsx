import Nav from "../Components/Nav";
import { NavLink } from "react-router-dom";
import styles from "../Stylesheets/ErrorPageStyle.module.css";

function ErrorPage() {
  return (
    <>
      <Nav />

      <section className={styles["error-content"]}>
        <div>
          <h1>Error 404</h1>
          <h2>Page Not Found</h2>
          <NavLink to={"/"}>Home</NavLink>
        </div>
      </section>
    </>
  );
}

export default ErrorPage;
