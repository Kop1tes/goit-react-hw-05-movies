import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 200px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  padding: 0;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
`;
export const Item = styled.li`
  border-radius: 20px;
  padding-bottom: 10px;
  background-color: var(--body-bcg-color);
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const LinkNav = styled(NavLink)`
  padding: 2px 4px;
  border-radius: 4px;
  text-decoration: none;
  color: var(--secondary-accent-color);
  font-weight: 800;
  &.hover,
  &.focus {
    color: var(--accent-color);
  }
`;
export const ItemImg = styled.img`
  border-radius: 3px;
  width: 100%;
  margin-bottom: 10px;
`;