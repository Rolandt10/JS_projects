const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=513f332206c6de1e2f0a093bc2360b9a&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=513f332206c6de1e2f0a093bc2360b9a&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
}

getMovies(API_URL);

function showMovies(movies) {
    main.innerHTML = "";
    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3 class="${getClassByTitleLength(title)}">${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>`;
    main.appendChild(movieElement);
    });
}

function getClassByTitleLength(title) {
    if (title.length >= 23) {
        return "long-title-size";
    } else {
        return "short-title-size";
    }
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

form.addEventListener("submit", e => {
    e.preventDefault();

    const searchTerm = search.value;
    if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH_URL + searchTerm);
        search.value = "";
    } else {
        window.location.reload();
    }
});

