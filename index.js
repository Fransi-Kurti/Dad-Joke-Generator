const btnEl = document.getElementById("btn");

const apiKey = "f0LYMKnHI5HoQuYKJVb95Q==Z21iKi1Opf0c8TI8";

const dadJokeEl = document.getElementById("api-joke");


const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getAjoke(){

try {
    dadJokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Get a Joke";
    dadJokeEl.innerText = data[0].joke;
} catch (error) {
    dadJokeEl.innerText = "An error, happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Get a Joke";
}

    
}

btnEl.addEventListener("click", getAjoke);