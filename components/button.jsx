import styles from "../styles/Button.module.css";

function button(props) {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
}

export default button;
