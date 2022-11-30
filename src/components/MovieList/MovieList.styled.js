import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  max-width: 400px;
  list-style: none;
`;

export const NavItem = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  width: 100%;
  color: #000;
  text-decoration: none;
  font-weight: 500;

  &:hover,
  &focus {
    color: #fff;
    background-color: rgb(44, 128, 209);
  }
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0px 0px 2px 2px rgba(44, 128, 209, 0.5);
  -webkit-box-shadow: 0px 0px 2px 2px rgba(44, 128, 209, 0.5);
  -moz-box-shadow: 0px 0px 2px 2px rgba(44, 128, 209, 0.5);

  &:last-child {
    margin-bottom: 0;
  }
`;
