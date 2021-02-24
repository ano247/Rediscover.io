import React, { useState } from "react";
import "./index.css";

function App() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };

  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>

        {submitted ? <div class='success-message'>Bookmark Saved!</div> : null}

        <textarea
          id="first-name"
          class="form-field"
          type="text"
          placeholder="tags"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
          wrap="soft"
        ></textarea>

        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstName && <span id="first-name-error">Please enter some tags!</span>}
        <textarea
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Insight"
          name="lastName"
          value={values.lastName}
          onChange={handleLastNameInputChange}
          wrap="soft"
        ></textarea>

        {/* Uncomment the next line to show the error message */}
        {submitted && !values.lastName && <span id="last-name-error">Please enter your insights!</span>}

        <button class="form-field" type="submit">
          Bookmark It!
        </button>
      </form>

    </div>
  );
}

export default App;
