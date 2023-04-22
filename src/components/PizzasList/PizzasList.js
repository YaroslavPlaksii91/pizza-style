import { Pizza } from 'components/Pizza';
import s from './PizzasList.module.css';

export const PizzasList = ({ pizzas }) => {
  return (
    <ul>
      {pizzas.map(pizza => (
        <li key={pizza.id}>
          <Pizza pizza={pizza} />
        </li>
      ))}
    </ul>
  );
};
