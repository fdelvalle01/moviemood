const BACKEND_URL = 'http://localhost:8080/api/favorites';

export async function saveFavorite(movie) {
  const response = await fetch(BACKEND_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      tmdbId: movie.id,
      title: movie.title,
      posterPath: movie.poster_path,
    }),
  });

  if (!response.ok) {
    throw new Error('Error saving favorite');
  }

  return await response.json();
}


export async function getFavorites() {
  const response = await fetch('http://localhost:8080/api/favorites');

  if (!response.ok) {
    throw new Error('Error fetching favorites');
  }

  return await response.json();
}


export async function deleteFavorite(id) {
  const response = await fetch(`http://localhost:8080/api/favorites/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Error deleting favorite');
  }
}


