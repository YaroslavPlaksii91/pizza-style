import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Main } from 'components/Main';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
