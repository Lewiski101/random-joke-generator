// script.js using JokeAPI for infinite jokes
const generateJokeButton = document.getElementById("generateJoke");
const jokeElement = document.getElementById("joke");

generateJokeButton.addEventListener("click", () => {
  fetch('https://v2.jokeapi.dev/joke/Any?type=single')  // Fetch a random joke of any type
    .then(response => response.json())
    .then(data => {
      if (data.joke) {
        jokeElement.textContent = data.joke;  // Display the joke
      } else {
        jokeElement.textContent = `${data.setup} - ${data.delivery}`;  // For "two-part" jokes
      }
    })
    .catch(error => {
      jokeElement.textContent = "Oops! Something went wrong. Try again.";
    });
});
