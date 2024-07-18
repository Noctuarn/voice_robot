import { HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.scss"

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Card = ({ children, ...rest }: Props) => {
  return (
    <div className={styles.card}  {...rest}>
      {children}
    </div>
  );
}

export default Card;
