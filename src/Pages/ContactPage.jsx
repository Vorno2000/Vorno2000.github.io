import React from "react";

import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgTranscript } from "react-icons/cg";

import styles from "../Stylesheets/ContactPageStyle.module.css";
import Nav from "../Components/Nav";

const ContactPage = () => {
  return (
    <>
      <Nav />

      <section className={styles["contact-content"]}>
        <div className={styles["info-container"]}>
          <div className={styles["info"]}>
            <h1>Name:</h1>
            <h2>Vaughn Carroll</h2>
          </div>
          <div className={styles["info"]}>
            <h1>Mobile:</h1>
            <h2 className={styles["info"]}>(+61) 433 465 461</h2>
          </div>
          <div className={styles["info"]}>
            <h1>Email:</h1>
            <h2 className={styles["info"]}>vorno2000@gmail.com</h2>
          </div>
        </div>
        <div className={styles["links-container"]}>
          <div className={styles["icon-container"]}>
            <Link to={"https://github.com/Vorno2000"} target="_blank">
              <FaGithub className={styles["github-icon"]} />
            </Link>
            <h1>Github</h1>
          </div>
          <div className={styles["icon-container"]}>
            <Link
              to={"https://www.linkedin.com/in/vaughncarroll/"}
              target="_blank"
            >
              <FaLinkedin className={styles["linkedin-icon"]} />
            </Link>
            <h1>Linkedin</h1>
          </div>
          <div className={styles["icon-container"]}>
            <Link
              to={
                "https://www.myequals.net/r/sharelink/cb3ffad6-384d-4596-a521-a126af344f86/9309ad05-cf05-4bab-9506-a2fd24a0fbd0"
              }
              target="_blank"
            >
              <CgTranscript className={styles["transcript-icon"]} />
            </Link>
            <h1>Transcript</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
