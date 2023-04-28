//Creates a reference to the quote button on page
document.querySelector('.new-quote-btn');

//Stores the reference to button in a variable
const newQuoteBtn = document.querySelector('.new-quote-btn');

//'Click' - event we need to listen for. 'getNewQuote' - function invoked when 'click' event is triggered on 'getNewQuote'
newQuoteBtn.addEventListener('click', getNewQuote);

function getNewQuote() {
    console.log("quote button was clicked");
}

const url('https://type.fit/api/quotes');

async function getNewQuote() {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw Error(response.statusText)
        }
    }
    const json = await response.json();
    console.log(json.message);
} catch (err) {
    console.log(err)
    alert('Failed to fetch new quote');
}