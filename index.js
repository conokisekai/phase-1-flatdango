document.addEventListener('DOMContentLoaded', () => {
  const movieList = document.getElementById('movie-list');
  const movieDetails = document.getElementsByClassName('movie-details');
  const buyTicketButton = document.getElementById('buy-ticket-button');
  const movieImage = document.querySelector('.movie-image');
  const movieDescription = document.querySelector('.movie-description');

  let currentMovie = null; // Store the currently selected movie
  let moviesData = []; // Store the movie data

  // Function to display movie details
  function displayMovieDetails(movie) {
    movieImage.innerHTML = `<img src="${movie.poster}" alt="${movie.title} Image" width="300">
  `;

    movieDescription.innerHTML = `
          <h2>${movie.title}</h2>
          <p>Runtime: ${movie.runtime}</p>
          <p>Showtime: ${movie.showtime}</p>
          <p>Available Tickets: ${movie.capacity - movie.tickets_sold}</p>
          `;

    // Update the button text based on available tickets
    if (movie.tickets_sold >= movie.capacity) {
      buyTicketButton.textContent = 'Sold Out';
      buyTicketButton.setAttribute('disabled', 'true');
    } else {
      buyTicketButton.textContent = 'Buy Ticket';
      buyTicketButton.removeAttribute('disabled');
    }
  }
  function buyTicket() {
    if (currentMovie) {
      // Check if there are available tickets
      if (currentMovie.tickets_sold < currentMovie.capacity) {
        // Update the sold tickets count and display
        currentMovie.tickets_sold++;
        displayMovieDetails(currentMovie);
      }
    }
  }
  fetch('http://localhost:3000/films')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Check if the data is an array of movies
      if (Array.isArray(data)) {
        moviesData = data; // Store the movie data

        // Clear any existing <li> elements
        movieList.innerHTML = '';

        // Create and populate <li> elements for each movie
        data.forEach((movie, index) => {
          const li = document.createElement('li');
          li.textContent = movie.title;
          li.addEventListener('click', () => {
            currentMovie = movie;
            displayMovieDetails(movie);
          });
          movieList.appendChild(li);
        });

        // Add a click event listener to the "Buy Ticket" button
        buyTicketButton.addEventListener('click', buyTicket);
      } else {
        movieList.innerHTML =
          '<li>Invalid JSON format. Expected an array of movies.</li>';
      }
    })
    .catch((error) => {
      console.error('Fetch error:', error);
      movieList.innerHTML = '<li>Error fetching data.</li>';
    });
});
