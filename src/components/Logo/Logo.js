import s from './Logo.module.css';

export const Logo = () => {
  return (
    <a href="./" className={s.logo}>
      <span className={s.logoAccent}>Pizza</span>Style
    </a>
  );
};
