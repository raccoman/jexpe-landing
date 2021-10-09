import styles from "../styles/Loading.module.css";
import Image from "next/image";

function loading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <Image src="/logo_short.png" width={100} height={100} />
      </div>
    </div>
  );
}

export default loading;
