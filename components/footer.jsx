import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Iubenda from "react-iubenda-policy";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <Image src="/logo.png" width={132} height={30} alt="Jexpe logo" />
            <p className={styles.text}>
              Copyright &copy; {new Date().getFullYear()} Jexpe | All Rights
              Reserved.
            </p>
          </div>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <Iubenda id={17665417} type="privacy" styling="nostyle">
                Privacy Policy
              </Iubenda>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <ul>
            {[
              { text: "Youtube", link: "https://www.youtube.com/channel/UCIrwUQA6vv3327d5TShfCrw" },
              { text: "LinkedIn", link: "https://www.linkedin.com/company/jexpe" },
            ].map((value, index) => {
              return (
                <li key={index}>
                  <a target="_blank" href={value.link}>{value.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
