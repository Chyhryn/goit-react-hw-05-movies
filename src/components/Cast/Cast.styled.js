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

  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5);
`;

export const Image = styled.img`
  display: block;
  width: 300px;
`;

export const CastText = styled.p`
  padding: 10px 5px;
`;
