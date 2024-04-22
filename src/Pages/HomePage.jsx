import Nav from "../Components/Nav";
import HomeTypeAnimation from "../Components/HomeTypeAnimation";
import styles from "../Stylesheets/HomePageStyle.module.css";

function HomePage() {
  return (
    <>
      <Nav />

      <section className={styles["home-content"]}>
        <div className={styles["content-container"]}>
          <div className={styles["description-container"]}>
            <h1>
              Hi, <br />
              I'm Vaughn <br />
            </h1>
            <HomeTypeAnimation />
          </div>
          <div className={styles["image-background"]}>
            <img
              className={styles["profile-image"]}
              src="/selfpicture.jpg"
              alt="logo"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
