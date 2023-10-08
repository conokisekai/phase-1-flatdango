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
            filmList.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error("Fetch error:", error);
            filmList.textContent = "Error fetching data.";
        });
});