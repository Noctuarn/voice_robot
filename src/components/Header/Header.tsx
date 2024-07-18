import styles from "./Header.module.scss";
import Logo from "/icons/logo.svg";
import Burger from "/icons/burger.svg";
import Button from "../../ui/Button/Button";

const Header = () => {
  const links = ["Як це працює", "Переваги", "Пропозиції", "Можливості"];

  return (
    <header className={`${styles.header}`}>
      <div className={`container ${styles.content}`}>
        <div className={styles.left_side}>
          <div className={styles.logo}>
            <img src={Logo} alt="" />
            <h2>Leadexy</h2>
          </div>

          <ul>
            {links.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>
        <div className={styles.right_side}>
          <Button fontSize="1rem" padding="13px 47px" variant="muted">
            Вхід
          </Button>
          <Button fontSize="1rem" padding="13px 35px" variant="primary">
            Реєстрація
          </Button>
        </div>
        <Button cn={styles.burger} variant="icon">
          <img src={Burger} alt="" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
