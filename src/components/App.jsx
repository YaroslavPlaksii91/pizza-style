import { Container } from './Container';
import { Header } from './Header';
import { Main } from './Main';
import { PizzasList } from './PizzasList';
import { products } from 'products';

export const App = () => {
  return (
    <Container>
      <Header />
      <Main>
        <PizzasList pizzas={products} />
      </Main>
    </Container>
  );
};
