import { PizzasList } from 'components/PizzasList';
import { products } from 'services/products';

const PizzaPage = () => {
  return <PizzasList pizzas={products} />;
};

export default PizzaPage;
