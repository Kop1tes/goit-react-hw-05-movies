import { useState, useEffect } from "react";
import { fetchMovies } from "../../services/moviesApi";
// import { MovieSearch } from "components/MovieSearch/MovieSearch";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import { Container } from "components/Container/Container";
import { List, Item,  ItemImg } from "./Movies.styled";
import loading from 'img/loading.jpg';
import { ToastContainer } from "react-toastify";
import {  Button, ButtonLabel, Form, Input, Label } from "components/MovieSearch/MovieSearch.styled";
import 'react-toastify/dist/ReactToastify.css';

// const ERROR_MESSAGE = "Что-то пошло не так, перезагрузите страницу...";

const Movies = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);   
    // const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    useEffect(() => {
        if (!query === "") return;

        async function getMovies() {
            // try {
            //     // setIsLoading(true);
            //     const movies = await fetchMovies(query);
            //     setMovies(movies.results);
            // } catch {
            //     setError(ERROR_MESSAGE);
            // } finally {
            //     // setIsLoading(false);
            // }

            const movies = await fetchMovies(query);
                setMovies(movies.results);
        }
        getMovies();
    }, [query]);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ query: form.elements.search.value });
        form.reset();
    };

    return (
        <Container>
            <Container>
            <Form onSubmit={handleSubmit}>
                <Button type="submit">
                    <ButtonLabel>Search</ButtonLabel>
                </Button>
                <Label>
                    <Input
                        type="text"
                        placeholder="Search movies"
                        name="search"
                    />
                </Label>
            </Form>
            <ToastContainer />
        </Container>
            {/* <MovieSearch query={query} isLoading={isLoading} onSearch={handleSubmit} /> */}
            {/* {error && <p>{error}</p>} */}
            {movies.length > 0 && (
                <List>
                    {movies.map(movie => (
                        <Item key={movie.id}>
                            <ItemImg
                                src={movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : loading}
                                alt={movie.original_title ?? movie.original_name}
                            />
                            <Link to={`${movie.id}`} state={{ from: location }}>
                                {movie.title}
                            </Link>
                        </Item>
                    ))}
                </List>
            )}
        </Container>
    );
};

export default Movies;