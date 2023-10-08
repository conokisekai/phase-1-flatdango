document.addEventListener('DOMContentLoaded', () => {
  const filmList = document.getElementById('films');
  const movieDetails = document.getElementById('movie-details');

  // Function to display movie details
  function displayMovieDetails(movie) {
    movieDetails.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.poster}" alt="${movie.title} Image" width="200" height="300">
        <p>Runtime: ${movie.runtime}</p>
        <p>Showtime: ${movie.showtime}</p>
        <p>Available Tickets: ${movie.capacity - movie.tickets_sold}</p>
    `;
  }

  fetch('http://localhost:3000/films')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Update the HTML content with the fetched data
      if (Array.isArray(data)) {
        filmList.innerHTML = '';

        // Create and populate <li> elements for each movie
        data.forEach((movie, index) => {
          const li = document.createElement('li');
          li.textContent = movie.title;
          li.addEventListener('click', () => {
            displayMovieDetails(movie);
          });
          filmList.appendChild(li);
        });
      } else {
        filmList.textContent =
          'Invalid JSON format. Expected an array of movies.';
      }
    })
    .catch((error) => {
      console.error('Fetch error:', error);
      filmList.textContent = 'Error fetching data.';
    });
});
