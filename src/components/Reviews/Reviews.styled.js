import styled from 'styled-components';

export const ReviewList = styled.ul`
  margin: 0;
  padding: 10px 0;

  list-style: none;
`;

export const ReviewItem = styled.li`
  padding 10px;
  border-radius: 2px;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5);

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Author = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
`;

export const NoReviwsNotification = styled.div`
  margin-top: 10px;
`;
