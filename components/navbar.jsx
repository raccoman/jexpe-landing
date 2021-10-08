import Image from "next/image";
import Button from "./button";
import styles from "../styles/Navbar.module.css";

function navbar() {
  return (
    <nav className={styles.navbar}>
      <Image src="/logo.png" width={132.5} height={30} />
      <div className={styles.cta}>
        <Button>Subscribe beta</Button>
      </div>
    </nav>
  );
}

export default navbar;
