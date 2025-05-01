const API_KEY = '274d353dd803ee55be27b882556ef6fa';
const BASE_URL = 'https://api.themoviedb.org/3';

const moodToGenre = {
  Happy: 35,     // Comedy
  Sad: 18,       // Drama
  Bored: 12,     // Adventure
  Angry: 28      // Action
};

export async function getMoviesByMood(mood) {
  const genreId = moodToGenre[mood];
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=popularity.desc`
  );
  const data = await res.json();
  return data.results;
}
