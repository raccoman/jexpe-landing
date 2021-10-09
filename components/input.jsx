import styles from "../styles/Input.module.css";
function input(props) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={props.id} className={styles.label}>
        {props.label}
      </label>
      <input id={props.id} className={styles.input} {...props}>
        {props.children}
      </input>
    </div>
  );
}

export default input;
