import { useState, useEffect } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { getFetchMoviesById } from "services/moviesApi";
import { Suspense } from "react";
import loding from 'img/loading.jpg';
import { List, ListImg, InfoList, LinkNav } from "./MovieDetails.styled";
import Loader from 'components/Loader/Loader';
import { Container } from "components/Container/Container";

const ERROR_MESSAGE = 'Что-то пошло не так, перезагрузите страницу...';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        getFetchMoviesById(Number(movieId))
            .then(setMovie)
            .catch(error => {
                setError(ERROR_MESSAGE);
                console.log(error);
            })
            .finally(() => setLoading(false));
    }, [movieId]);

    if (!movie) {
        return null;
    };

    const backLinkHref = location.state?.from ?? '/movies';
    const backLink = location.state?.from ?? '/';
    const getYearDate = () => new Date(movie.release_date).getFullYear();

    return (
        <>
            <Container>
                <LinkNav to={backLinkHref}>Back to movies</LinkNav>
                {loading && <Loader />}
                {error && <div>{error}</div>}
                {movie && (
                    <List>
                        <ListImg
                            src={
                                movie.poster_path
                                    ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                                    : loding
                            }
                            alt={movie.title}
                        />
                        <InfoList>
                            <h2>{movie.title}</h2>
                            <p>
                                <span>({getYearDate()})</span>
                            </p>
                            <p>User Score: {movie.popularity}</p>
                            <h3>Overview:</h3>
                            <p>{movie.overview}</p>
                            <h3>Gernes:</h3>
                            <p>{movie.genres.map(genre => `${genre.name} `)}</p>
                        </InfoList>
                    </List>
                )}
                <hr />
                <div>
                    <h3>Additional information</h3>
                    <ul>
                        <li>
                            <LinkNav to="cast" state={{ from: backLink }}>
                                Get to know the cast
                            </LinkNav>
                        </li>
                        <li>
                            <LinkNav to="reviews" state={{ from: backLink }}>
                                Go through the reviews
                            </LinkNav>
                        </li>
                    </ul>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </div>
            </Container>
        </>
    );
};

export default MovieDetails;