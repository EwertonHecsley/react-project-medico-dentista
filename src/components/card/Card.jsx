import s from "./Card.module.scss";

export const Card = ({ title, description, variant = "green" }) => {
  return (
    <article className={`${s.card} ${s[variant]}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};
