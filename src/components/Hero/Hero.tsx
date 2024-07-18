import styles from "./Hero.module.scss";
import Button from "../../ui/Button/Button";
import HeroImage from "../HeroImage/HeroImage";
import Badge from "../../ui/Badge/Badge";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.content} container`}>
        <div className={styles.left_side}>
          <Badge>Твій помічник</Badge>
          <h1>Голосовий робот для дзвінків від <span>1,7 ₴ за хвилину</span> розмови</h1>
          <p>У декілька разів дешевше за оператора і може обдзвонити 1000 клієнтів за пару хвилин</p>
            <Button variant="primary" fontSize="1.3rem" padding="21px 61px">Спробувати</Button>
        </div>
        <div className={styles.right_side}>
            <HeroImage/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
