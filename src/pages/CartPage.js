import { useSelector } from 'react-redux';
import { getPizzas } from 'redux/selectors';
import { CartTitle } from 'components/CartTitle';
import { PizzasList } from 'components/PizzasList';
import { Total } from 'components/Total';
import { Order } from 'components/Order';

const CartPage = () => {
  const pizzas = useSelector(getPizzas);

  return pizzas && pizzas.length === 0 ? (
    <CartTitle />
  ) : (
    <>
      <PizzasList pizzas={pizzas} />
      <Total />
      <Order />
    </>
  );
};

export default CartPage;
