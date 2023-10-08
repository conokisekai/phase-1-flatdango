document.addEventListener("DOMContentLoaded", () => {
    const filmList = document.getElementById("films");

    fetch("http://localhost:3000/films")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }).then(data => {
            // Update the HTML content with the fetched data
            if (Array.isArray(data)) {
                const ul = document.createElement("ul");
                data.forEach(movie => {
                    const li = document.createElement("li");
                    li.textContent = movie.title;
                    ul.appendChild(li);
                });
                filmList.appendChild(ul);
            } else {
                filmList.textContent = "Invalid JSON format. Expected an array of movies.";
            }
        })
        .catch(error => {
            console.error("Fetch error:", error);
            filmList.textContent = "Error fetching data.";
        });
});