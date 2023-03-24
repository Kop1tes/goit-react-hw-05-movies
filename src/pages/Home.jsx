import { Container } from "components/Container/Container";
import Loader from "components/Loader/Loader";
import { TrendingList } from "components/TrendingList/TrendingList";
import { useEffect, useState } from "react";
import { gerFetchTrendingMovie } from "../services/moviesApi";
import NotFoundView from "components/NotFoundView/NotFoundView";

const ERROR_MESSAGE = "Что-то пошло не так, перезагрузите страницу...";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        gerFetchTrendingMovie().then(setMovies).catch(error => {
            setError(ERROR_MESSAGE);
            console.log(error);
        }).finally(() => setIsLoading(false));
    }, []);

    if (!movies) {
        return null;
    }

    const isNotFound = !isLoading && !movies.length;

    return (
        <>
            <Container>
                <h1>Trending today</h1>
                {isLoading && <Loader />}
                {error && <p>{error}</p>}
                {isNotFound && <NotFoundView />}
                {movies && <TrendingList movies={movies} />}
            </Container>
        </>
    );
};

export default Home;