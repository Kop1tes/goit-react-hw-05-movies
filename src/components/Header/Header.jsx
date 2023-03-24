import { Link, List, Nav } from "./Header.styled"

export const Header = () => {
    return (
        <Nav>
            <List>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
            </List>
        </Nav>
    );
};