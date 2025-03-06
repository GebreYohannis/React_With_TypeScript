import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // Redirect to the HomePage
          navigate("/");
        }}
      >
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
