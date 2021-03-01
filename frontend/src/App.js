import React, { useState } from 'react';
import './App.css';
import Fuse from 'fuse.js';

function App() {
  const [query, updateQuery] = useState('');
  const [bookmarkPosts, setBookmarkPost] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3001/api/data").then(
      res => setBookmarkPost(res.data)
    ).catch(err => setHasError(true))
  }, [])

  const fuse = new Fuse(bookmarkPosts, {
    keys: [
      'title',
      'tags'
    ],
    includeScore: true
  });

  const results = fuse.search(query);
  const bookmarkResults = query ? results.map(bookmarkPost => bookmarkPost.item) : bookmarkPosts;

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
        <ul className="bookmarkPosts">
          {bookmarkResults.map(bookmarkPost => {
            const { title, thumb, hypeLink, insight } = bookmarkPost;
            return (
              <li key={title} className="bookmarkPost">

                <a href={hypeLink}><strong>^</strong></a>
                <span className="bookmarkPost-thumb" style={{
                  backgroundImage: `url(${thumb})`
                }} />


                <ul className="bookmarkPost-meta">
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
