import Input from "./input";
import Button from "./button";
import { useRef, useState } from "react";
import Loading from "./loading";
import styles from "../styles/ContactForm.module.css";

function ContactForm() {
  const [state, setState] = useState({
    loading: false,
    retryScreen: false,
    completed: false,
  });

  const name = useRef(null);
  const email = useRef(null);

  // Handle request and errors
  const submitForm = async (e) => {
    e.preventDefault();
    setState({ ...state, loading: true });
    try {
      await fetch("https://api.jexpe.com/beta/join", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.current.value,
          email: email.current.value,
        }),
      });
      setState({ ...state, completed: true, loading: false });
    } catch {
      setState({ ...state, retryScreen: true, loading: false });
    }
  };
  if (state.completed) {
    return (
      <div>
        <h1 className={styles.heading} style={{ textAlign: "center" }}>
          Thank you!
        </h1>
        <h2 className={styles.subheading}>
          Thank you for signing up for the Jexpe beta, you should receive a
          confirmation email shortly.
        </h2>
      </div>
    );
  } else if (state.loading) {
    return <Loading />;
  } else if (state.retryScreen) {
    return (
      <div>
        <h1 className={styles.heading} style={{ textAlign: "center" }}>
          Something went wrong!
        </h1>
        <h2 className={styles.subheading}>
          Oh...it&apos;s really embarrassing. We were not able to process your
          request. Please try again by pressing the button below, if the problem
          persists please try again later.
        </h2>
        <Button
          onClick={() => {
            setState({ ...state, loading: false, retryScreen: false });
          }}
          style={{
            width: "100%",
            height: "65px",
            backgroundColor: "var(--black)",
            color: "var(--white)",
            fontSize: "20px",
          }}
        >
          Retry
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className={styles.heading} style={{ textAlign: "center" }}>
          Want To Be a Beta Tester?
        </h1>
        <h2 className={styles.subheading}>
          We want to offer the best possible service and we need your help. We
          value feedback and it will ultimately shape our product into something
          you love using.
        </h2>
        <form onSubmit={submitForm}>
          <Input type="text" label="Name" ref={name} required />
          <Input type="email" label="Email Address" ref={email} />
          <Button
            type="submit"
            style={{
              width: "100%",
              height: "65px",
              backgroundColor: "var(--black)",
              color: "var(--white)",
              fontSize: "20px",
            }}
          >
            Subscribe beta
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
