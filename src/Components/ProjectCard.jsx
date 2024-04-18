import styles from "../Stylesheets/ProjectCardStyle.module.css";

function ProjectCard({ img, title, description }) {
  return (
    <>
      <div className={`${styles["card-container"]}`}>
        <img src={img} alt="Project Image" />

        <h1>{title}</h1>
      </div>
    </>
  );
}

export default ProjectCard;
