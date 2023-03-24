import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "components/Container/Container";
import { Item, ItemImg, LinkNav, List, Title } from "./TrendingList.styled";
import loading from 'img/loading.jpg';
import PropTypes from "prop-types";

export const TrendingList = ({ movies }) => {
    const location = useLocation();
    return (
        <Container>
            <List>
                {movies.map(({ id, original_title, original_name, poster_path }) => (
                    <Item key={id}>
                        <ItemImg
                            src={poster_path ? `https://image.tmdb.org/t/p/w200/${poster_path}` : loading}
                            alt={original_title ?? original_name}
                        />
                        <LinkNav to={`/movies/${id}`} state={{ from: location }}>
                            <Title>{original_title ?? original_name}</Title>
                        </LinkNav>
                    </Item>
                ))}
            </List>
        </Container>
    );
};

TrendingList.propTypes = {
    id: PropTypes.string,
    original_title: PropTypes.string,
    original_name: PropTypes.string,
};