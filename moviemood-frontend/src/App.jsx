import { useState } from 'react';
import { getMoviesByMood } from './api/tmdb';
import { saveFavorite } from './api/backend';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const moods = [
    { label: 'Happy', emoji: '😊' },
    { label: 'Sad', emoji: '😢' },
    { label: 'Bored', emoji: '😴' },
    { label: 'Angry', emoji: '😡' },
  ];

  const handleClick = async (mood) => {
    setLoading(true);
    const result = await getMoviesByMood(mood);
    setMovies(result);
    setLoading(false);
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <a
        href="/favorites"
        className="block text-center mt-8 text-blue-600 hover:underline"
      >
        Ver favoritos ⭐
      </a>

      <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 flex justify-center items-center gap-2">
          How do you feel Today? <span>🎬</span>
        </h1>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {moods.map((m) => (
            <button
              key={m.label}
              onClick={() => handleClick(m.label)}
              className="bg-gradient-to-r from-slate-200 to-slate-100 text-gray-800 font-semibold py-3 rounded-xl shadow hover:scale-105 transition"
            >
              {m.emoji} {m.label}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {movies.map((movie) => (
              <div key={movie.id} className="bg-white rounded-lg shadow p-2 flex flex-col items-center">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded mb-2"
                />
                <h2 className="text-sm font-semibold text-center mb-2">{movie.title}</h2>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded"
                  onClick={() => {
                    saveFavorite(movie)
                      .then(() => alert("Película guardada 👌"))
                      .catch((err) => alert("Error al guardar 😢"));
                  }}
                >
                  ⭐ Guardar
                </button>
              </div>
            ))}
          </div>

        )}
      </div>
    </div>
  );
}

export default App;
