import { useNavigate } from "react-router-dom"
import { ButtonStyle } from "./Button.styled";

export const Button = () => {
    const navigate = useNavigate();
    return <ButtonStyle onClick={() => navigate(-1)}>Back</ButtonStyle>
}