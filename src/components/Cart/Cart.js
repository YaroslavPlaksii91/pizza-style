import { RiShoppingCartLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { getPizzas } from 'redux/selectors';
import s from './Cart.module.css';

export const Cart = () => {
  const pizzas = useSelector(getPizzas);

  const amount = pizzas.reduce((total, pizza) => {
    return (total += pizza.amount);
  }, 0);

  return (
    <div className={s.circle}>
      <RiShoppingCartLine className={s.cart} />
      <div className={s.amount}>{amount}</div>
    </div>
  );
};
