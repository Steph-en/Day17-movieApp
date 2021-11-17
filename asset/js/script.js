const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e44ab4dc1faac81ca80800619bf1059a&page=1'

cont IMG_PATH = 'https://image.tmdb.org/t/p/w128000'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=e44ab4dc1faac81ca80800619bf1059a&&query="'

cont form = document.getElementById(form)

//Get initial movies
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  console.log(data.result)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if (searchTerm && searchTerm == !'') {
    getMovies(SEARCH_API + searchTerm)
    search.value = ''
  } else {
    window.location.reload()
  }
})