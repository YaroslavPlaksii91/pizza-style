import s from './Logo.module.css';

export const Logo = () => {
  return (
    <p className={s.logo}>
      <span className={s.accentLogo}>Pizza</span>Style
    </p>
  );
};
