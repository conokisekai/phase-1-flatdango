document.addEventListener('DOMContentLoaded', () => {
  const movieList = document.getElementById('movie-list');
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
//   function buyTicket() {
//     if (currentMovie) {
//       // Check if there are available tickets
//       if (currentMovie.tickets_sold < currentMovie.capacity) {
//         // Update the sold tickets count and display
//         currentMovie.tickets_sold++;
//         displayMovieDetails(currentMovie);
//       }
//     }
//   }
  fetch('http://localhost:3000/films')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Check if the data is an array of movies
      if (Array.isArray(data) && data.length > 0) {
        moviesData = data; // Store the movie data

        // Display the details of the first movie by default
        currentMovie = data[0];
        displayMovieDetails(currentMovie);

        // Clear any existing <li> elements
        movieList.innerHTML = "";

        // Create and populate <li> elements for each movie
        data.forEach((movie, index) => {
          const li = document.createElement("li");
          li.textContent = movie.title;
          li.addEventListener("click", () => {
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
    fetch("http://localhost:3000/films")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Check if the data is an array of movies
      if (Array.isArray(data) && data.length > 0) {
        moviesData = data; // Store the movie data

        // Display the details of the first movie by default
        currentMovie = data[0];
        displayMovieDetails(currentMovie);

        // Clear any existing <li> elements
        movieList.innerHTML = "";

        // Create and populate <li> elements for each movie
        data.forEach((movie, index) => {
          const li = document.createElement("li");
          li.textContent = movie.title;
          li.addEventListener("click", () => {
            currentMovie = movie;
            displayMovieDetails(movie);
          });
          movieList.appendChild(li);
        });

        // Add a click event listener to the "Buy Ticket" button
        buyTicketButton.addEventListener("click", buyTicket);
      } else {
        movieList.innerHTML =
          "<li>Invalid JSON format. Expected an array of movies.</li>";
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      movieList.innerHTML = "<li>Error fetching data.</li>";
    });
  function updateTicketInfo(movie) {
    if (movie) {
      if (movie.tickets_sold < movie.capacity) {
        // Increment the sold tickets count
        movie.tickets_sold++;

        // Send a PUT or POST request to update the server
        fetch(`http://localhost:3000/films/${movie.id}`, {
          method: "PUT", // Use 'PUT' or 'POST' depending on your server's API
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(movie),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((updatedMovie) => {
            // Update the currentMovie with the updated data
            currentMovie = updatedMovie;
            displayMovieDetails(updatedMovie);
          })
          .catch((error) => {
            console.error("Update error:", error);
          });
      }
    }
  }

  // Function to handle the "Buy Ticket" button click
  function buyTicket() {
    updateTicketInfo(currentMovie);
  }
});
