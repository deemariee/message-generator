const newQuoteButton = document.getElementById("generate");
const quoteContainer = document.getElementById("quote");

// Fetch a new quote from the API
function getQuote() {
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            quoteContainer.innerText = `"${data.content}" - ${data.author}`;
        })
        .catch(error => console.error(error));
}

// Generate a new quote when the button is clicked
newQuoteButton.addEventListener("click", getQuote);