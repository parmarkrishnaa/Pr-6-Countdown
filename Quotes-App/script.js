const quotes = [
    { text: "Believe in yourself.", author: "Anonymous" },
    { text: "Stay positive, work hard, make it happen.", author: "Unknown" },
    { text: "Don't wish for it. Work for it.", author: "Tim Notke" },
    { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    { text: "Great things never come from comfort zones.", author: "Anonymous" }
];

function simpleRandom(max) {
    const time = new Date();
    const ms = time.getMilliseconds();
    const index = ms % max;
    return index;
}

function generateQuote() {
    const i = simpleRandom(quotes.length);
    document.getElementById("quote").textContent = quotes[i].text;
    document.getElementById("author").textContent = "- " + quotes[i].author;
}