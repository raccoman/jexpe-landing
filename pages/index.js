import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Button from "../components/button";
import Image from "next/image";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";
import { Typewriter } from "react-simple-typewriter";
import { createRef } from "react";

export default function Home() {
  const ctaForm = createRef(null);

  const scrollToCta = () =>
    ctaForm.current.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <>
      <Head>
        <title>Jexpe &ndash; Your one-stop communication software</title>
        <meta name="description" content="Jexpe is an easy-to-use software that supports all of the most common communication methods to maximize productivity, and foster collaboration in teams." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar ctaOnClick={scrollToCta} />

      <main className={styles.main}>
        <div className={styles.hero}>
          <div>
            <h1 className={styles.heading} style={{ textAlign: "center" }}>
              Remotely manage <br />
              <span>
                <span style={{ visibility: "hidden" }}>W</span>
                <Typewriter
                  words={[
                    "Amazon S3",
                    "Azure",
                    "OpenStack",
                    "Backblaze B2",
                    "OneDrive",
                    "Google Drive",
                    "Dropbox",
                    "SSH",
                    "SFTP",
                    "Telnet",
                  ]}
                  loop={0}
                  cursor={false}
                  typeSpeed={125}
                  deleteSpeed={75}
                  delaySpeed={2000}
                />
                <span style={{ visibility: "hidden" }}>W</span>
              </span>
            </h1>
            <h2 className={styles.subheading}>
              Manage multiple servers from one easy-to use interface and share
              credentials between teammates.
            </h2>
            <div style={{ textAlign: "center" }}>
              <Button
                style={{ width: "248px", height: "64px", fontSize: "20px" }}
                onClick={scrollToCta}
              >
                Subscribe beta
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.showcase}>
          <div className={styles.softwareShowcase}>
            <Image src="/mac_jexpe.png" width={895} height={705} alt="Jexpe software" />
          </div>
          <div className={styles.separator}></div>
          <div
            className={styles.contentArea}
            style={{ backgroundColor: "var(--white)" }}
          >
            <div className={styles.container}>
              <div className={styles.textContent}>
                <h1 className={styles.heading}>
                  <span>All common protocols</span>
                </h1>
                <p className={styles.blackTextContent}>
                  Jexpe is a powerful software package for opening and managing
                  servers. It currently supports: SSH, Telnet, FTP, SFTP,
                  WebDAV, Amazon S3, OpenStack Swift, Backblaze B2, Microsoft
                  Azure, OneDrive, Google Drive and Dropbox.
                </p>
              </div>
              <div className={styles.imageContent}>
                <Image src="/protocols.png" width={440} height={420} alt="Protocols supported by Jexpe" />
              </div>
            </div>
          </div>
          <div className={styles.contentArea}>
            <div className={styles.containerReverse}>
              <div className={styles.imageContent}>
                <Image src="/teams.png" width={440} height={420} alt="Work with your team by using Jexpe" />
              </div>
              <div className={styles.textContent}>
                <h1 className={styles.heading}>
                  <span>Work with your team</span>
                </h1>
                <p className={styles.whiteTextContent}>
                  We enable teams to collaboratively manage access of your
                  company servers and credentials, making it easy for you to
                  share these with members of the team. Setting up Jexpe only
                  takes minutes and once activated you can monitor in real time
                  which sharing permissions each staff member has in place
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ctaSection} ref={ctaForm}>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
