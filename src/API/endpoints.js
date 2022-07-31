const key = process.env.REACT_APP_API_KEY

const endpoints = {
    popularMovies: `https://api.themoviedb.org/3/movie/popular/?api_key=${key}&language=en-US&page=1`,
    topRatedMovies: `https://api.themoviedb.org/3/movie/top_rated/?api_key=${key}&language=en-US&page=1`,
    trendingMovies: `https://api.themoviedb.org/3/movie/tranding/?api_key=${key}&language=en-US&page=2`,
    horrorMovies: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=2&include_adult`,
    upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming/?api_key=${key}&language=en-US&page=2`,

}

export default endpoints