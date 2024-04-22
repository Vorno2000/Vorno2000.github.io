import React from "react";
import { FaJava, FaCss3Alt, FaReact, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiMongodb } from "react-icons/si";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";

import styles from "../Stylesheets/SkillsPageStyle.module.css";

import Nav from "../Components/Nav";

const SkillsPage = () => {
  return (
    <>
      <Nav />

      <section className={styles["skills-content"]}>
        <div>
          <h1 className={styles["skills-title"]}>Skills</h1>
          <div className={styles["grid-container"]}>
            <div className={styles["item-container"]}>
              <div className={styles["item"]}>
                <h1>
                  <FaHtml5 />
                </h1>
                <h2>HTML</h2>
                <div className={styles["bar"]} />
              </div>
              <div className={styles["item"]}>
                <h1>
                  <FaCss3Alt />
                </h1>
                <h2>CSS</h2>
                <div className={styles["bar"]} />
              </div>
              <div className={styles["item"]}>
                <h1>
                  <FaReact />
                </h1>
                <h2>React JS</h2>
                <div className={styles["bar"]} />
              </div>
              <div className={styles["item"]}>
                <h1>
                  <BiLogoJavascript />
                </h1>
                <h2>Javascript</h2>
                <div className={styles["bar"]} />
              </div>
              <div className={styles["item"]}>
                <h1>
                  <FaJava />
                </h1>
                <h2>Java</h2>
                <div className={styles["bar"]} />
              </div>
              <div className={styles["item"]}>
                <h1>
                  <SiMysql />
                </h1>
                <h2>MySQL</h2>
                <div className={styles["bar"]} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className={styles["skills-title"]}>Skills to Learn</h1>
          <div className={styles["grid-container"]}>
            <div className={styles["item-container"]}>
              <div className={styles["item"]}>
                <h1>
                  <FaNodeJs />
                </h1>
                <h2>Node JS</h2>
                <div className={styles["bar"]} />
              </div>
              <div className={styles["item"]}>
                <h1>
                  <BiLogoTypescript />
                </h1>
                <h2>Typescript</h2>
                <div className={styles["bar"]} />
              </div>
              <div className={styles["item"]}>
                <h1>
                  <SiMongodb />
                </h1>
                <h2>Mongo DB</h2>
                <div className={styles["bar"]} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
