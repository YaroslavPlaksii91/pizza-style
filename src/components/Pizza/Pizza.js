import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import {
  addPizza,
  deletePizza,
  increaseAmount,
  decreaseAmount,
} from 'redux/cartSlice';
import { getPizzas } from 'redux/selectors';
import s from './Pizza.module.css';

export const Pizza = ({ pizza }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { title, description, price, image } = pizza;

  const pizzas = useSelector(getPizzas);
  const selectedPizza = pizzas.find(({ id }) => id === pizza.id);
  const quantity = selectedPizza && selectedPizza.amount;

  const cartIsOpen = location.pathname.includes('cart');

  const onAddBtnClick = () => {
    dispatch(addPizza({ ...pizza, amount: 1 }));
  };

  const onPlusBtnClick = () => {
    dispatch(increaseAmount(pizza.id));
  };

  const onMinusBtnClick = () => {
    if (quantity === 1) {
      dispatch(deletePizza(pizza.id));
      return;
    }

    dispatch(decreaseAmount(pizza.id));
  };

  const onCloseBtnClick = () => {
    dispatch(deletePizza(pizza.id));
  };

  return (
    <article className={s.card}>
      <div className={s.image}>
        <img src={image} alt={title} />
      </div>
      <h3 className={s.title}>{title}</h3>
      <p className={s.description}>{description}</p>
      <p className={s.price}>{price} UAH</p>
      {!quantity ? (
        <button type="button" className={s.btn} onClick={onAddBtnClick}>
          Add to cart
        </button>
      ) : (
        <div className={s.buttonsWrap}>
          <button
            type="button"
            className={s.additionalBtn}
            onClick={onMinusBtnClick}
          >
            -
          </button>
          {cartIsOpen && <div className={s.amount}>{quantity}</div>}
          <button
            type="button"
            className={s.additionalBtn}
            onClick={onPlusBtnClick}
          >
            +
          </button>
        </div>
      )}

      {cartIsOpen && (
        <button type="button" className={s.closeBtn} onClick={onCloseBtnClick}>
          <MdClose />
        </button>
      )}
    </article>
  );
};
