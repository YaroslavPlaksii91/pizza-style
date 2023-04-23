import { useDispatch } from 'react-redux';
import { deleteAllPizzas } from 'redux/cartSlice';
import s from './Order.module.css';

export const Order = () => {
  const dispatch = useDispatch();

  const onBtnClick = () => {
    dispatch(deleteAllPizzas());
  };

  return (
    <button type="button" onClick={onBtnClick} className={s.btn}>
      Make an order
    </button>
  );
};
