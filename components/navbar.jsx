import Image from "next/image";
import Button from "./Button.jsx";
import styles from "../styles/Navbar.module.css";

function Navbar(props) {
  return (
    <nav className={styles.navbar}>
      <Image src="/logo.png" width={132.5} height={30} alt="Jexpe logo" />
      <div className={styles.cta}>
        <Button onClick={props.ctaOnClick}>Subscribe beta</Button>
      </div>
    </nav>
  );
}

export default Navbar;
