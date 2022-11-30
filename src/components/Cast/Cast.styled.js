import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;

  margin: 10px auto;
  padding: 0;
  list-style: none;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0;
  max-width: 300px;
  height: 100%;
`;

export const Image = styled.img`
  display: block;
  width: 300px;
`;

export const CastText = styled.p`
  padding: 10px 5px;
`;
