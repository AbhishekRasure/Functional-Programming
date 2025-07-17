
const movies = [
    {id: 1, title: "The Shawshank Redemption", genre: "Drama", year: 1994},
    {id: 2, title: "The Godfather", genre: "Crime", year: 1972},
    {id: 3, title: "The Dark Knight", genre: "Action", year: 2008},
    {id: 4, title: "Pulp Fiction", genre: "Crime", year: 1994},
]

const moviesList = document.querySelector("#moviesList")

const moviesListHTML = movies.map(movie => `
    <div><strong>Id : </strong>${movie.id}</div><br>
    <div><strong>Title : </strong>${movie.title}</div><br>
    <div><strong>Genre : </strong>${movie.genre}</div><br>
    <div><strong>Year : </strong>${movie.year}</div>
    <hr>
`)

moviesList.innerHTML = moviesListHTML.join("")