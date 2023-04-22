import { NavLink, Link } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Logo } from 'components/Logo';
import s from './Nav.module.css';

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <Link to="/pizza" className={s.link}>
        <Logo />
      </Link>

      <NavLink
        to="/pizza"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Pizza
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        <RiShoppingCartLine className={s.cart} />
      </NavLink>
    </nav>
  );
};
