import Capability1 from "/images/capability1.png";
import Capability2 from "/images/capability2.png";
import Capability3 from "/images/capability3.png";
import Card from "../../ui/Card/Card";
import styles from "./Capabilities.module.scss";

type Capabilities = {
  iconSrc: string;
  title: string;
  paragraph: string;
};

const capabilitiesList: Capabilities[] = [
  {
    paragraph:
      "Голосовий робот рекламує послугу або товар за допомогою телефонних переговорів",
    title: "Холодні продажі",
    iconSrc: Capability1,
  },
  {
    paragraph:
      "Відстежуйте рівень задоволеності клієнтів продукцією без залучення операторів колл-центру",
    title: "Опитування",
    iconSrc: Capability2,
  },
  {
    paragraph: "Надсилайте сервісні повідомлення в режимі реального часу",
    title: "Прийом даних",
    iconSrc: Capability3,
  },
  {
    paragraph: "Повідомляйте клієнтів про нові акції або новини",
    title: "Сповіщення",
    iconSrc: Capability3,
  },
];

const Capabilities = () => {
  return (
    <section>
      <div className={`${styles.content} container`}>
        {capabilitiesList.map((el) => (
          <Card key={el.title}>
            <div className={styles.capability_card}>
              <div className={styles.image_wrapper}>
                <img src={el.iconSrc} alt="" />
              </div>
              <div>
                <h5>{el.title}</h5>
                <p>{el.paragraph}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
