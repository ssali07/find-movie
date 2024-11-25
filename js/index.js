const url = "https://www.omdbapi.com/?i=tt3896198&apikey=1c5dfa6f";

const form = document.querySelector('form')
const movie = document.getElementsByClassName('movie-container');
const input = document.getElementById('search-input')
const image = document.getElementsByClassName('movie-image');
const details = document.getElementsByClassName('movie-details');

async function fetchMovie(query){
    const res = await fetch(`${url}&t=${query}`);
    const data = await res.json();
    showDetails(data)
}

function showDetails(data){
    set_poster(data.Poster);
    set_description(data)
}

function set_poster(url){
    img = document.getElementById('img_box')
    img.src = url;
    img.alt = "Poster not found!";
}

function set_description(data){
    moviecontainer = document.getElementsByClassName('movie-container')
    title = document.getElementById('title')
    actors = document.getElementById('actors')
    runtime = document.getElementById('runtime')
    released = document.getElementById('released')
    genre = document.getElementById('genre')
    director = document.getElementById('director')
    language = document.getElementById('language')
    awards = document.getElementById('awards')
    country = document.getElementById('country')
    rated = document.getElementById('rated')
    rating = document.getElementById('rating')
    writer = document.getElementById('writer')
    plot = document.getElementById('plot')

    title.innerHTML = `<span>Movie Title - </span>${data.Title}`;
    actors.innerHTML = `<span>Actors - </span>${data.Actors}`;
    runtime.innerHTML = `<span>Runtime - </span>${data.Runtime}`;
    released.innerHTML = `<span>Released on - </span>${data.Released}`;
    genre.innerHTML = `<span>Genre - </span>${data.Genre}`;
    director.innerHTML = `<span>Director - </span>${data.Director}`;
    language.innerHTML = `<span>Available in Languages - </span>${data.Language}`;
    awards.innerHTML = `<span>Awards win - </span>${data.Awards}`;
    country.innerHTML = `<span>Country - </span>${data.Country}`;
    rated.innerHTML = `<span>Rated for - </span>${data.Rated}`;
    rating.innerHTML = `<span>IMDB Rating - </span>${data.imdbRating}<i class='bx bxs-star'></i>`;
    writer.innerHTML = `<span>Writers - </span>${data.Writer}`;
    plot.innerHTML = `<span>Plot - </span>${data.Plot}`;

}

//Function to read the input
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(input.value);
    let query = input.value.trim();
    
    if(query=='' || query==' '){
        alert("Enter any Movie name to search");
    }
    else{
        fetchMovie(query);
        result = document.getElementById('result');
        result.innerHTML = "Here is your Search Result";
    }
})

const bollywoodMovies = [
    "Sholay",
    "Dilwale Dulhania Le Jayenge",
    "Lagaan",
    "3 Idiots",
    "Kabhi Khushi Kabhie Gham",
    "Chak De! India",
    "Zindagi Na Milegi Dobara",
    "Dangal",
    "Bajrangi Bhaijaan",
    "Tanu Weds Manu",
    "Andhadhun",
    "Drishyam",
    "Barfi!",
    "PK",
    "Sultan",
    "Kuch Kuch Hota Hai",
    "Devdas",
    "Swades",
    "Jab We Met",
    "Rockstar",
    "My Name Is Khan",
    "Om Shanti Om",
    "Goliyon Ki Raasleela Ram-Leela",
    "Veer-Zaara",
    "Dhoom 3",
    "Dil Chahta Hai",
    "Don",
    "Hum Aapke Hain Koun..!",
    "Koi Mil Gaya",
    "Kal Ho Naa Ho",
    "Rang De Basanti",
    "Black",
    "Raazi",
    "Article 15",
    "Badhaai Ho",
    "Masaan",
    "Piku",
    "The Lunchbox",
    "Kaabil",
    "M.S. Dhoni: The Untold Story",
    "Bhaag Milkha Bhaag",
    "Stree"
];

function getRandomMovie() {
    const randomIndex = Math.floor(Math.random() * bollywoodMovies.length);
    return bollywoodMovies[randomIndex];
}

let movie_name = getRandomMovie();

fetchMovie(movie_name);