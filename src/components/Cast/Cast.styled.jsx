import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 5px);
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 16px;
  margin: 0 auto;
  list-style: none;
`;

export const CastItem = styled.li`
  padding: 7px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CastImg = styled.img`
  border-radius: 3px;
  border: none;
  width: 100%;
  margin-bottom: 10px;
`;

export const CastInfo = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
`;

export const Title = styled.h3`
  font-size: 12px;
`;
export const Info = styled.p`
  font-size: 12px;
  line-height: 1.2;
`;