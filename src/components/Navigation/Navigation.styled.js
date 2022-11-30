import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  margin-right: 10px;
  padding: 10px 0;
  cursor: pointer;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;

  &.active {
    color: rgb(255, 71, 71);
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: rgb(44, 128, 209);
  }
`;

export const Nav = styled.nav`
  padding: 10px 0;
`;
