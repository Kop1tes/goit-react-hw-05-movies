import { Container } from "components/Container/Container";
import { useDebounce } from "hooks/useDebounce";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Button, ButtonLabel, Form, Input, Label } from "./MovieSearch.styled";
import PropTypes from "prop-types";
import 'react-toastify/dist/ReactToastify.css';

const DEBOUNCE_TIME = 250;

export const MovieSearch = ({ query, onSearch }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState();
    const debounceSearchQuery = useDebounce(searchQuery, DEBOUNCE_TIME);

    useEffect(() => {
        if (!debounceSearchQuery) {
            searchParams.delete("query");
            setSearchParams(searchParams);
            return;
        }
        setSearchParams({ query: debounceSearchQuery });
    }, [debounceSearchQuery, setSearchParams, searchParams, query]);

    const handleSubmit = e => {
        e.preventDefault();
        if (query.trim() === "") {
            return toast.error(
                "Sorry, there are no movies matchingyour search query. Please try again.",
                { theme: "colored" }
            );
        }
        onSearch(query);
        setSearchQuery("");
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
                        value={searchQuery}
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