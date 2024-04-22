import React from "react";
import { useParams } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import Nav from "../Components/Nav";
import ErrorPage from "../Pages/ErrorPage.jsx";
import ProjectData from "../Data/ProjectsData.jsx";
import styles from "../Stylesheets/ProjectInfoStyle.module.css";

export const ProjectInfo = () => {
  const { projectId } = useParams();

  const project = ProjectData[projectId];

  const linkToPage = () => {
    return (
      <>
        <Link to={project.link} reloadDocument>
          <FaExternalLinkAlt className={styles["link-icon"]} />
        </Link>
      </>
    );
  };

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

            <div
              className={styles["links-container"]}
              style={{
                justifyContent:
                  project.link === "" ? "center" : "space-between",
              }}
            >
              <Link to={project.github}>
                <FaGithub className={styles["github-icon"]} />
              </Link>
              {project.link !== "" ? linkToPage() : null}
            </div>
          </div>
        </section>
      </>
    );
  };

  return project ? projectDataPage() : <ErrorPage />;
};

export default ProjectInfo;
