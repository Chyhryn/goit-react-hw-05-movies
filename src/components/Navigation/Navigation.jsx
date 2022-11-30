import { NavItem, Nav } from './Navigation.styled';
export const Navigation = () => {
  return (
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/movies">Movies</NavItem>
    </Nav>
  );
};
