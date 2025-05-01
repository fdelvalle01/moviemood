import { useEffect, useState } from 'react';
import { getFavorites, deleteFavorite } from './api/backend';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites()
      .then(setFavorites)
      .catch(() => alert("Error al cargar favoritos"));
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteFavorite(id);
      setFavorites((prev) => prev.filter((movie) => movie.id !== id));
    } catch {
      alert("Error al eliminar favorito");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">⭐ Tus Películas Favoritas</h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-600">No tienes favoritos guardados.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
          {favorites.map((movie) => (
            <div key={movie.id} className="bg-white rounded shadow p-2 text-center relative">
              {movie.posterPath ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.posterPath}`}
                  alt={movie.title}
                  className="rounded mb-2"
                />
              ) : (
                <div className="h-[450px] bg-gray-200 flex items-center justify-center text-sm text-gray-500 rounded mb-2">
                  Sin imagen
                </div>
              )}
              <h2 className="text-sm font-semibold mb-1">{movie.title}</h2>
              <button
                onClick={() => handleDelete(movie.id)}
                className="text-red-600 text-sm hover:underline"
              >
                🗑️ Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
