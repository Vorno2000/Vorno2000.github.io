import Nav from "../Components/Nav.jsx";
import ProjectCard from "../Components/ProjectCard.jsx";
import styles from "../Stylesheets/ProjectsPageStyle.module.css";
import projectsData from "../Data/ProjectsData.jsx";
import { Link } from "react-router-dom";

function Projects() {
  let webProjects = [];
  let javaProjects = [];

  function getData() {
    projectsData.map(({ id, category, img, title, description }) => {
      if (category === "web") {
        webProjects.push(
          <Link key={id} to={`/projects/${id}`}>
            <ProjectCard img={img} title={title} description={description} />
          </Link>
        );
      } else {
        javaProjects.push(
          <Link key={id} to={`/projects/${id}`}>
            <ProjectCard img={img} title={title} description={description} />
          </Link>
        );
      }
    });
  }

  getData();

  return (
    <>
      <Nav />

      <section className={styles["projects-content"]}>
        <h1 className={`${styles.heading}`}>Web Developer Projects</h1>
        <div className={`${styles["grid-container"]} ${styles.web}`}>
          {webProjects}
        </div>

        <h1 className={`${styles.heading}`}>Java University Projects</h1>
        <div className={`${styles["grid-container"]} ${styles.java}`}>
          {javaProjects}
        </div>
      </section>
    </>
  );
}

export default Projects;
