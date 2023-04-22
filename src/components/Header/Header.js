import { Nav } from 'components/Nav';
import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <Nav />
    </header>
  );
};
