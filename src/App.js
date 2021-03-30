import React, { useState } from "react";
import "./index.css";
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

function App() {

  const [values, setValues] = useState({
    tags: "",
    texts: "",
  });

  const { search } = useLocation()
  const { id } = queryString.parse(search)

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [values, setValues] = useState([])

  const handleTagInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      tags: event.target.value,
    }));
  };

  const handleInsightInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      texts: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.tags && values.texts) {
      setValid(true);
      const toSend = JSON.stringify({ values })
      fetch('http://localhost:3001/updatePost/', {
        method: 'POST',
        body: { id, toSend },
        headers: { 'Content-Type': 'application/json' },
      })
        .then(() => setValues({
          tags: "",
          texts: "",
        }))
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
          name="tags"
          value={values.tags}
          onChange={handleTagInputChange}
          wrap="soft"
        ></textarea>

        {/* Uncomment the next line to show the error message */}
        {submitted && !values.tags && <span id="first-name-error">Please enter some tags!</span>}
        <textarea
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Insight"
          name="texts"
          value={values.texts}
          onChange={handleInsightInputChange}
          wrap="soft"
        ></textarea>

        {/* Uncomment the next line to show the error message */}
        {submitted && !values.texts && <span id="last-name-error">Please enter your insights!</span>}

        <button class="form-field" type="submit">
          Bookmark It!
        </button>
      </form>

    </div>
  );
}

export default App;
