// Get the button element for programming jokes by its ID
const fetchProgrammingJokeBtn = document.getElementById('fetch-programming-joke-btn');

// Add a click event listener to the programming joke button
fetchProgrammingJokeBtn.addEventListener('click', function() {
  // Use fetch to get a random programming joke from the API
  fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then(function(response) {
      // Convert the response to JSON
      return response.json();
    })
    .then(function(jokes) {
      // The API returns an array with one joke object
      const joke = jokes[0];
      // Get the setup and punchline elements from the page
      const setupElement = document.getElementById('setup');
      const punchlineElement = document.getElementById('punchline');
      // Display the joke setup and punchline on the page
      setupElement.textContent = joke.setup;
      punchlineElement.textContent = joke.punchline;
    });
});