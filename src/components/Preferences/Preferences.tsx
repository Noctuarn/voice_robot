import { motion, useInView } from "framer-motion";
import Preferences1 from "/images/preferences1.png";
import Preferences2 from "/images/preferences2.png";
import Preferences3 from "/images/preferences3.png";
import Preferences4 from "/images/preferences4.png";
import Badge from "../../ui/Badge/Badge";
import Card from "../../ui/Card/Card";

import styles from "./Preferences.module.scss";
import { useRef } from "react";

type Preferences = {
  title: string;
  imgSrc: string;
};

const preferencesList: Preferences[] = [
  {
    title: "Обдзвонює базу номерів або приймає дзвінки",
    imgSrc: Preferences2,
  },
  {
    title: "Штучний інтелект розпізнає мову і записує всі відповіді",
    imgSrc: Preferences4,
  },
  { title: "Реагує на слова за заданим алгоритмом:", imgSrc: Preferences3 },
];

const Preferences = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section>
      <div className={`container ${styles.content}`}>
        <div className={styles.top}>
          <div className={styles.left_side}>
            <div>
              <Badge>Переваги</Badge>
              <h2>Дешевше, ніж оператор в кілька разів</h2>
              <p>
                Веде спілкування по заданому скрипту: може завершити розмову,
                з’єднати з менеджером або розсилати прості смс
              </p>
            </div>

            <h5>Як ми працюємо:</h5>
          </div>
          <div className={styles.right_side}>
            <motion.img
              initial={{ y: 0 }}
              animate={{ y: 100 }}
              transition={{
                repeat: Infinity,
                duration: 3,
                repeatType: "reverse",
              }}
              src={Preferences1}
              alt="preferences-robot"
            />
          </div>
        </div>

        <div ref={ref} className={styles.bottom}>
          {preferencesList.map((el, i) => (
            <motion.div
              key={el.title}
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 * (i + 1) }}
            >
              <Card>
                <div className={styles.preference_card}>
                  <div className={styles.card_content}>
                    <span>{i + 1}</span>
                    <h4>{el.title}</h4>
                  </div>
                  <img src={el.imgSrc} alt="" />
                  <div className={styles.background}></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Preferences;
