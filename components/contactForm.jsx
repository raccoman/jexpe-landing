import Input from "./input";
import Button from "./button";

function contactForm() {
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitForm}>
      <Input type="text" label="Name" required />
      <Input type="email" label="Email Address" />
      <Button
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
  );
}

export default contactForm;
