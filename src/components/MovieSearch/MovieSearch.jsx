import { Container } from "components/Container/Container";
import { ToastContainer } from "react-toastify";
import { Button, ButtonLabel, Form, Input, Label } from "./MovieSearch.styled";
import PropTypes from "prop-types";
import 'react-toastify/dist/ReactToastify.css';

export const MovieSearch = ({ query, onSearch }) => {

    return (
        <Container>
            <Form onSubmit={onSearch}>
                <Button type="submit">
                    <ButtonLabel>Search</ButtonLabel>
                </Button>
                <Label>
                    <Input
                        type="text"
                        placeholder="Search movies"
                        name="search"
                        // value={query}
                        // onChange={(e) => onSearch(e.target.value)}
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