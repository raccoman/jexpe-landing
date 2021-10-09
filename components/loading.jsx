import styles from "../styles/Loading.module.css";
import Image from "next/image";

function Loading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <Image
          src="/logo_short.png"
          width={100}
          height={100}
          alt="Jexpe x logo"
        />
      </div>
    </div>
  );
}

export default Loading;
