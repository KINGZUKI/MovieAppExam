import React from 'react';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import './App.css';
import Favorites from './components/Favorites';



function App() {
  return (
    <div>
     <Navbar />

    <main>
    <section>
      <div>
        <p>MovieFlix</p>

        <h1>Discover your next favorite movie</h1>

        <p>Search for movies, discover something new and and save your favorites for later.</p>

        <div>
          <input type="text" placeholder="Search for a movie..." />
          <button>Search</button>
        </div>
      </div>
    </section>

    <section>
      <div>
        <h2>Search Results</h2>
      </div>
      <h3>No movies found</h3>
      <p>Try searching another Search</p>
    </section>
    </main>
    <footer>
      <p>2026 MovieFlix. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default App;