const apikey = "f0e8a04592961c48219f6a29f5648f84";

const requests={
    fetchTrending:`/trending/all/week?api_key=${apikey}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${apikey}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${apikey}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${apikey}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${apikey}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${apikey}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${apikey}&with_genres=10749`,
    fetchDocumentMovies:`/discover/movie?api_key=${apikey}&with_genres=99`,
}

export default requests;