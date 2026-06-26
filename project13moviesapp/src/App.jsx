import React, { useCallback, useState } from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import movies from './data/movies';
import SearchBar from './components/SearchBar';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [count, setCount] = useState(0);
  const [search,setSearch]=useState("");

  const handleFavorite = useCallback((id) => {
     setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((movieId) => movieId !== id);
      }
     return [...prev, id];
    })
  },[]);
  const productFilter=movies.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
    <Header/>
    <button onClick={() => setCount((prev) => prev + 1)}>
  Counter: {count}
</button>
<SearchBar search={search}
        setSearch={setSearch} />
    <MovieList
      movies={productFilter}
      favorites={favorites}
      onFavorite={handleFavorite}
    />
    </>
  );
}

export default App;