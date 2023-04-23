import { PizzasList } from 'components/PizzasList';
import { Section } from 'components/Section';
import { products } from 'services/products';

const PizzaPage = () => {
  return (
    <Section>
      <PizzasList pizzas={products} />
    </Section>
  );
};

export default PizzaPage;
