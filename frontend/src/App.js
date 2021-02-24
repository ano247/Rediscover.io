import React, { useState } from 'react';
import './App.css';
import Fuse from 'fuse.js';

function App() {
  const [query, updateQuery] = useState('');
  const [characters, setCharacter] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3001/api/data").then(
      res => setCharacter(res.data)
    ).catch(err => setHasError(true))
  }, [])

  const fuse = new Fuse(characters, {
    keys: [
      'title',
      'tags'
    ],
    includeScore: true
  });

  const results = fuse.search(query);
  const characterResults = query ? results.map(character => character.item) : characters;

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }

  return (
    <>

      <header className="App-header">
        <div className="container">
          <h1>Your Bookmarks</h1>
        </div>
      </header>

      <main className="container">
        <ul className="characters">
          {characterResults.map(character => {
            const { title, thumb, hypeLink, insight } = character;
            return (
              <li key={title} className="character">

                <a href={hypeLink}><strong>^</strong></a>
                <span className="character-thumb" style={{
                  backgroundImage: `url(${thumb})`
                }} />


                <ul className="character-meta">
                  <li>
                    <strong>Title:</strong> {title}
                  </li>
                  <li>

                    <div>
                      <a class="button" href="#popup1"><strong>Insights</strong></a>
                    </div>

                    <div id="popup1" class="overlay">
                      <div class="popup">
                        <h2>Rediscovering...</h2>
                        <a class="close" href="#">&times;</a>
                        <div class="content">
                          {insight}
                        </div>
                      </div>
                    </div>

                  </li>
                </ul>
              </li>
            )
          })}
        </ul>
        <aside>
          <form className="search">
            <label>Search</label>
            <input type="text" value={query} onChange={onSearch} />
          </form>
        </aside>
      </main>
    </>
  );
}

export default App;
