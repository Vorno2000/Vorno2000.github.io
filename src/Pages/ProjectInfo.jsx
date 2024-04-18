import React from "react";
import { useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import Nav from "../Components/Nav";
import ErrorPage from "../Pages/ErrorPage.jsx";
import ProjectData from "../Data/ProjectsData.jsx";
import styles from "../Stylesheets/ProjectInfoStyle.module.css";

export const ProjectInfo = () => {
  const { projectId } = useParams();

  const project = ProjectData[projectId];

  const projectDataPage = () => {
    return (
      <>
        <Nav />

        <section className={styles["project-info-content"]}>
          <div className={styles["image-container"]}>
            <img src={project.img} alt="Project Image" />
          </div>
          <div className={styles["info-container"]}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {/* project.link */}
            <Link to={"/"}>
              <FaGithub className={styles["github-icon"]} />
            </Link>
          </div>
        </section>
      </>
    );
  };

  return project ? projectDataPage() : <ErrorPage />;
};

export default ProjectInfo;
