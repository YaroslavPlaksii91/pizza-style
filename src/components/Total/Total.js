import { useSelector } from 'react-redux';
import { getPizzas } from 'redux/selectors';
import s from './Total.module.css';

export const Total = () => {
  const pizzas = useSelector(getPizzas);
  const total = pizzas.reduce((acc, pizza) => {
    return (acc += pizza.price * pizza.amount);
  }, 0);

  return <p className={s.total}>Total: {total} UAH</p>;
};
