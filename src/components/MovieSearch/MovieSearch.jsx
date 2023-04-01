import { Container } from "components/Container/Container";
import { useDebounce } from "hooks/useDebounce";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Button, ButtonLabel, Form, Input, Label } from "./MovieSearch.styled";
import PropTypes from "prop-types";
import 'react-toastify/dist/ReactToastify.css';
import { fetchMovies } from "services/moviesApi";

const DEBOUNCE_TIME = 250;

export const MovieSearch = ({ query, onSearch }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(null);
    const debounceSearchQuery = useDebounce(searchQuery, DEBOUNCE_TIME);

    console.log(debounceSearchQuery);
    useEffect(() => {
        if (debounceSearchQuery === "") return;
        async function movieFetch() {
            console.log(debounceSearchQuery, "Это debounceSearcQuery");
            const movie = await fetchMovies("dogs");
            setSearchQuery(debounceSearchQuery);
            setSearchParams({ query: debounceSearchQuery });
        }

        // if (!debounceSearchQuery) {
        //     // searchParams.delete("query");
        //     setSearchParams(searchParams);
        //     return;
        // }

        setSearchParams({ query: debounceSearchQuery });
        // if (debounceSearchQuery !== "")  movieFetch();
            
        
        
    }, [debounceSearchQuery, setSearchParams, searchParams, query]);

    const handleSubmit = e => {
        e.preventDefault();
        if (query.trim() === "") {
            return toast.error(
                "Sorry, there are no movies matching your search query. Please try again.",
                { theme: "colored" }
            );
        }
        const form = e.currentTarget;
        setSearchParams({ debounceSearchQuery: form.elements.search.value });
        // form.reset();
        onSearch(query);
        // setSearchQuery("");
    };

    return (
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
                        // value={searchQuery}
                        onChange={e => {
                            setSearchQuery(e.target.value);
                        }}
                    />
                </Label>
            </Form>
            <ToastContainer />
        </Container>
    );
};

MovieSearch.propTypes = {
    query: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
};