const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
    const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
            "Accept": "application/json"
        }
    });

    const data = await response.json();

    jokeElement.innerHTML = data.joke;
}

// function generateJoke() {
//     fetch("https://icanhazdadjoke.com", {
//         headers: {
//             "Accept": "application/json"
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         jokeElement.innerHTML = data.joke;
//     });
// }