import { Link } from 'react-router-dom';
import s from './CartTitle.module.css';

export const CartTitle = () => {
  return (
    <h2 className={s.title}>
      Please, choose pizza{' '}
      <Link to="/" className={s.link}>
        here
      </Link>
    </h2>
  );
};
