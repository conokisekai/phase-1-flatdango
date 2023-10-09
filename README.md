# Flatdango Movie Web App

Flatdango is a web application that allows users to purchase movie tickets from Flatiron Movie Theater. This project implements a mini web application using JavaScript, fetching data from a local server running a JSON DB server.

## Author

Conrad Kambi
https://github.com/conokisekai

## Learning Goals

The main learning goals of this project include:

-   Implementing a web application using JavaScript.
-   Fetching data from a local server running a JSON DB server.
-   Creating a user interface for viewing movie details and purchasing tickets.

## Project Setup

Follow these steps to set up the project:

1.  **Create a new project folder:** Create a new folder for your project on your local machine.
    
2.  **Create a new GitHub repository:** Create a private GitHub repository for your project. Add your TM as a contributor for grading purposes.
    
3.  **Clone the repository:** Clone the repository to your local machine using the following command:
    
    `git clone <repository_url>` 
    
4.  **Install dependencies:** No additional dependencies are required for this project.

## Getting Started

To run the project locally, follow these steps:

1.  **Clone the repository:**
    
    `git clone <repository_url>` 
    
2.  **Navigate to the project folder:**
    
    `cd flatdango` 
    
3.  **Open the `index.html` file in your browser to view the application.**
    

## Project Guidelines

### Core Deliverables

As a user, you can:

-   **View Movie Details:**
    
    -   When the page loads, you can see the first movie's details, including its poster, title, runtime, showtime, and available tickets. The number of available tickets is calculated by subtracting the number of tickets_sold from the theater's capacity. Data is fetched from the endpoint: 
        `GET /films/1` 
        
-   **See a Menu of All Movies:**
    
    -   On the left side of the page, there is a menu displaying all movies in the `ul#films` element when the page loads. You can style each film in the list by adding the classes `film item` to each `li` element. Data is fetched from the endpoint:
        
        `GET /films` 
        
-   **Buy a Ticket:**
    
    -   You can buy a ticket for a movie. After clicking the "Buy Ticket" button, the number of available tickets decreases on the frontend. You cannot buy a ticket if the showing is sold out (if there are 0 tickets available). No persistence is needed for this feature.

### Bonus Deliverables

-   **Switch Movie Details:**
    
    -   You can click on a movie in the menu to replace the currently displayed movie's details with the new movie's details. An additional GET request may be required to access the movie's details.
-   **Indicate Sold Out Movies:**
    
    -   When a movie is sold out (no available tickets remaining), the button text changes to "Sold Out". The film item in the `ul#films` menu is updated by adding a class of `sold-out` to the film.

### Extra Bonus

-   **Persist Ticket Purchases:**
    
    -   When a ticket is purchased, the updated number of tickets_sold is persisted on the server. The frontend shows the number of available tickets based on `tickets_sold` and `capacity`. Only `tickets_sold` should be updated on the backend when a ticket is purchased. Use the following request structure:
        
  

> PATCH /films/:id

  Request Headers: 

>     {
>           Content-Type: application/json
>         }

    Request Body: 

>     {
>       "tickets_sold": 28
>     }`

        
-   **Delete Movies:**
    
    -   You can delete a film from the server by clicking the delete button next to each film in the `ul#films` menu. When the button is clicked, the film is removed from the list, and the film is deleted on the server.
        
        `DELETE /films/:id` 

### Note:
This project uses a local server running a JSON DB server to fetch and persist data.
Make sure to follow the project guidelines and requirements to complete the core and bonus deliverables.

Feel free to document your code with comments or explanations to make it easy for others (or your future self) to understand how your solution works.

Good luck with the challenges, and happy coding! If you have any questions or need further assistance, don't hesitate to ask.

# LICENCE
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org> the index.html file in your browser to view the application.






