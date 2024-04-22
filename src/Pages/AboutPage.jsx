import Nav from "../Components/Nav";
import styles from "../Stylesheets/AboutPageStyle.module.css";

function About() {
  return (
    <>
      <Nav />

      <section className={styles["about-content"]}>
        <div className={styles["content-container"]}>
          <div className={styles["image-background"]}>
            <img
              className={styles["profile-image"]}
              src="/aboutpicture.jpg"
              alt="logo"
            />
          </div>
          <div className={styles["description-container"]}>
            <h1>Hello,</h1>
            <p>
              As an aspiring Full Stack Web Developer, I bring a strong
              foundation in Java programming and relational database
              technologies like MySQL, which have been honed through previous
              industry experience.
            </p>
            <p>
              Currently, my focus is on mastering JavaScript frameworks such as
              React JS for crafting dynamic and intuitive front-end experiences,
              while also learning Node JS for building robust and scalable
              back-end systems.
            </p>
            <p>
              With a passion for seamless web design and a commitment to growth,
              I aim to leverage my Java and database experience, alongside
              emerging skills in React JS and Node JS, to create innovative,
              intuitive and functional web applications.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
