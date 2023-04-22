import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Main } from 'components/Main';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};
