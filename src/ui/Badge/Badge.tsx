import { HTMLAttributes } from "react";
import styles from "./Badge.module.scss"; // Ensure correct path to your SCSS module


const Badge = ({children, ...rest }: HTMLAttributes<HTMLSpanElement>) => {
  
  return (
    <span className={styles.badge} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
