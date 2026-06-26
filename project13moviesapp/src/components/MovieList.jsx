import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies,favorites,onFavorite}) {
  return (
    <div  className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
        movies.map((movie)=>(
            <MovieCard key={movie.id}
               movie={movie}
               isFavorite={favorites.includes(movie.id)}
               onFavorite={onFavorite}
            />
        ))
      }
    </div>
  )
}

export default MovieList