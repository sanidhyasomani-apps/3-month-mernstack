import { memo } from "react";

const MovieCard = memo(function MovieCard({
  movie,
  isFavorite,
  onFavorite,
}) {
  console.log(`${movie.title} Rendered`);

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={movie.image}
        alt={movie.title}
        className="h-80 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{movie.title}</h2>

        <p className="mt-2 text-gray-600">
          <span className="font-semibold">Genre:</span> {movie.genre}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold">Year:</span> {movie.year}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="rounded-full bg-yellow-400 px-3 py-1 font-semibold">
            ⭐ {movie.rating}
          </span>

          <button
            onClick={() => onFavorite(movie.id)}
            className={`rounded-lg px-4 py-2 font-semibold transition ${
              isFavorite
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isFavorite ? "❤️ Favorite" : "🤍 Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
});

export default MovieCard;