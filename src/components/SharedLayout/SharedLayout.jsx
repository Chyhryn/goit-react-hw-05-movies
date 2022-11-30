import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Header, Container, SuspenseTitle } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Suspense fallback={<SuspenseTitle>Loading...</SuspenseTitle>}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};
