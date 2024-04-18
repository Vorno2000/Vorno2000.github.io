import styles from "../Stylesheets/HomeTypeAnimationStyle.module.css";
import { TypeAnimation } from "react-type-animation";

const HomeTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        ``,
        500,
        `React.js Developer...`,
        1500,
        ``,
        500,
        `HTML5, CSS3, Javascript, React...`,
        1500,
        ``,
        500,
        `Welcome to my Web Dev Journey...`,
        1500,
      ]}
      className={styles["type-animation"]}
      speed={10}
      deletionSpeed={50}
      repeat={Infinity}
    />
  );
};

export default HomeTypeAnimation;
