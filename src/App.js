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

  /* const handleEmailInputChange = (event) => {
     event.persist();
     setValues((values) => ({
       ...values,
       email: event.target.value,
     }));
   }; */

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName /* && values.email */) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {submitted ? <div class='success-message'>Bookmark Saved!</div> : null}

        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="tags"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        />

        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstName && <span id="first-name-error">Please enter some tags!</span>}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Insight"
          name="lastName"
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />

        {/* Uncomment the next line to show the error message */}
        {submitted && !values.lastName && <span id="last-name-error">Please enter your insights!</span>}

        {/*<input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInputChange}
  /> */ }

        {/* Uncomment the next line to show the error message */}
        {/*submitted && !values.email && <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Bookmark It!
        </button>
      </form>

    </div>
  );
}

export default App;
