import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

type ButtonVariant = "primary" | "secondary" | "muted" | "icon";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  cn?: string;
  padding?: string;
  fontSize?: string;
  variant?: ButtonVariant;
}

const Button = ({ cn, variant, children, padding, fontSize, ...rest }: IButtonProps) => {
  const buttonClass = classNames(
    cn,
    {
      [styles["btn-primary"]]: variant === "primary",
      [styles["btn-muted"]]: variant === "muted",
      [styles["btn-secondary"]]: variant === "secondary",
      [styles["btn-icon"]]: variant === "icon",
    },
    styles.btn
  );

  return <button style={{padding, fontSize}} className={buttonClass}>{children}</button>;
};

export default Button;
