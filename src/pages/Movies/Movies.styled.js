import styled from 'styled-components';

export const SearchForm = styled.form`
  margin-bottom: 10px;
  padding: 10px 0;
  max-width: 400px;
  outline-bottom: 1px solid #000;
`;

export const SearchInput = styled.input`
  padding: 5px;
  width: 200px;
`;

export const Button = styled.button`
margin-left: 5px;
padding: 6px 10px;

border: none;
border-radius: 2px;
cursor: pointer;
background-color: transparent;
box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.5);
-webkit-box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.5);
-moz-box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.5);
  

  &:hover,
  &:focus {
   color: #fff;
    background-color: rgb(44, 128, 209);
`;
