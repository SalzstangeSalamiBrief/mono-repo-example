import { ComponentProps } from "react";
import styles from "./Button.module.css";

export interface IButtonProps extends ComponentProps<"button"> {
  /**
   * The label of the button to display
   */
  label: string;
}

export function Button({ label, onClick }: IButtonProps): JSX.Element {
  return (
    <button className={styles.btn} onClick={onClick}>
      {label}
    </button>
  );
}
