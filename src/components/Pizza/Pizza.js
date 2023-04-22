import s from './Pizza.module.css';

export const Pizza = ({ pizza }) => {
  const { title, description, price, image } = pizza;

  const handleClick = () => {};

  return (
    <article className={s.card}>
      <div className={s.image}>
        <img src={image} alt={title} />
      </div>
      <h3 className={s.title}>{title}</h3>
      <p className={s.description}>{description}</p>
      <p className={s.price}>{price} UAH</p>
      <button type="button" className={s.btn} onClick={handleClick}>
        Add to cart
      </button>
    </article>
  );
};
