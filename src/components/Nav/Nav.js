import { Logo } from 'components/Logo';
import s from './Nav.module.css';

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <Logo />
      <a href="">Pizza</a>
      <a href="">Cart</a>
    </nav>
  );
};
