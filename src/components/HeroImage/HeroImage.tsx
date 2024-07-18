import style from "./HeroImage.module.scss";
import RobotHero from "/images/robot-hero.png";
import Hero1 from "/images/hero1.png";
import Hero2 from "/images/hero2.png";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <div>
      <div className={style.background}>
        <motion.img
          initial={{
            y: 0,
          }}
          animate={{
            y: -80,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className={style.robot_img}
          src={RobotHero}
          alt="Robot"
        />
        <div className={style.shadow}></div>
        <img className={style.image1} src={Hero1} alt="" />
        <img className={style.image2} src={Hero2} alt="" />
      </div>
    </div>
  );
};

export default HeroImage;
