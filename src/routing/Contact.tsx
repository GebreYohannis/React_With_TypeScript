function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // Redirect to the HomePage
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
