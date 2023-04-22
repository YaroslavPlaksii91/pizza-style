import { Pizza } from 'components/Pizza';
import s from './PizzasList.module.css';

export const PizzasList = ({ pizzas }) => {
  return (
    <ul className={s.list}>
      {pizzas.map(pizza => (
        <li key={pizza.id} className={s.item}>
          <Pizza pizza={pizza} />
        </li>
      ))}
    </ul>
  );
};
