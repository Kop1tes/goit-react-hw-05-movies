import { StyledLink } from "./Navigation.styled";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <StyledLink href="">Home</StyledLink>
                </li>
                <li>
                    <StyledLink href="">Movies</StyledLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;