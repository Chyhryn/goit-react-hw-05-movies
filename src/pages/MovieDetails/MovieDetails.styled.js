import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  max-width: 300px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  margin-bottom: 10px;
  padding: 5px 10px;

  background-color: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5);

  font-size: 15px;
  line-height: 1.15;

  &:hover,
  &:focus {
    color: #fff;
    background-color: rgb(44, 128, 209);
  }
`;

export const MovieInfoWrapper = styled.div`
  padding: 30px 20px;
  max-width: 700px;
`;

export const OtherInfoWrapper = styled.div`
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;

export const List = styled.ul`
  margin: 0 0 10px 0;
  padding: 0;

  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  max-width: 100px;
  overflow: hidden;

  border-radius: 4px;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5);

  &:last-child {
    margin-bottom: 0;
  }
`;

export const NavItem = styled(NavLink)`
  display: inline-block;
  padding: 5px 0;
  width: 100%;

  text-align: center;
  text-decoration: none;
  color: #000;
  background-color: transparent;

  &.active {
    color: #fff;
    background-color: rgb(255, 71, 71);
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #fff;
    background-color: rgb(44, 128, 209);
  }
`;

export const SuspenseTitle = styled.h1`
  padding: 30px;
`;
