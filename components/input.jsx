import styles from "../styles/Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => (
  <div className={styles.inputGroup}>
    <label htmlFor={props.id} className={styles.label}>
      {props.label}
    </label>
    <input ref={ref} id={props.id} className={styles.input} {...props}>
      {props.children}
    </input>
  </div>
));

Input.displayName = "Input";

export default Input;
