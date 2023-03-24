import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--accent-color);
  border: none;
  border-radius: 10px;
  padding: 2px;
  margin-top: 20px;
  gap: 10px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 7px;
  padding: 5px;
  margin: 10px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--body-bcg-color);
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const ButtonLabel = styled.span`
  width: 15px;
  height: 15px;
  color: black;
  font-size: 14px;
  font-style: inherit;
`;

export const Label = styled.label`
  color: var(--body-bcg-color);
  font-size: 0.8rem;
  font-family: Open Sans, Arial, sans-serif;
  text-shadow: 1px 1px 1px #232323;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 5px;
  background-color: var(--body-bcg-color);
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;