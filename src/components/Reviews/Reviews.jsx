import { Button } from "components/Button/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getFetchMovieReviews } from "services/moviesApi";
import { Item, List } from "./Reviews.styled";
import PropTypes from "prop-types";

export const Reviews = () => {
    const { movieId } = useParams();
    const [infoReviews, setInfoReviews] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        const getFetchReviews = async () => {
            try {
                const result = await getFetchMovieReviews(movieId);
                setInfoReviews(result);
            } catch (error) {
                setError(error);
            }
        };
        getFetchReviews();
    }, [movieId]);

    if (!infoReviews) {
        return null;
    }

    if (infoReviews.length === 0 || infoReviews.length === "") {
        return "We don't have any reviews for this movie.";
    }

    return (
        <>
            <Button />
            {error && <div>{error}</div>}
            <List>
                {infoReviews.map(({ id, author, content }) => {
                    return (
                        <Item key={id}>
                            <h3>Author: {author}</h3>
                            <p>{content}</p>
                        </Item>
                    );
                })}
            </List>
        </>
    );
};

Reviews.propTypes = {
    id: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
};