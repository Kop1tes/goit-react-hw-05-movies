import PropTypes from "prop-types";
import { ContainerStyle } from "./Contsiner.styled";

export const Container = ({ children }) => {
    return <ContainerStyle>{children}</ContainerStyle>
};

Container.propTypes = {
    children: PropTypes.node,
};