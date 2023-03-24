import axios from "axios";

const API_KEY = "7af8d26f8668bf8419f6518deb2b9fd6";

export const gerFetchTrendingMovie = async () => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );
    console.log(response.data.results);
    return response.data.results;
};

export const fetchMovies = async query => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}&query=${query}&page=1`
    );
    return response.data;
};

export const getFetchMoviesById = async movieid => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieid}?api_key=${API_KEY}`
    )
    return response.data;
}

export const getFetchMovieCredits = async movieid => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=${API_KEY}&language=en-US`
    )
    return response.data.cast;
}

export const getFetchMovieReviews = async (movieid, page = 1) => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieid}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
    )
    console.log(response.data.results)
    return response.data.results;
};