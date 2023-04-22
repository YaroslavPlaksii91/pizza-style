import { PizzasList } from 'components/PizzasList';
import { products } from 'products';

export const PizzaPage = () => {
  return <PizzasList pizzas={products} />;
};
