import { NavLink, Link } from 'react-router-dom';
import { Logo } from 'components/Logo';
import { Cart } from 'components/Cart';
import s from './Nav.module.css';

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <Link to="/" className={s.link}>
        <Logo />
      </Link>

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Pizza
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        <Cart />
      </NavLink>
    </nav>
  );
};
