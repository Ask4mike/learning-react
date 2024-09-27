import styles from "./components/PricingCard/PricingCard.module.css";

export default function PricingCard({
  label,
  price,
  duration,
  image,
  imageAlt,
}) {
  const benefits = [
    "Up to 10 Users",
    "Email Support, Call Support",
    "1 Year Access",
  ];
  return (
    <div className={styles.card}>
      <div className={`${styles.card__wrapper} center-vertical`}>
        <span className={styles.card__label}>{label}</span>
        <div className={styles.card__image}>
          <img src={image} alt={imageAlt} />
        </div>
        <div className={styles["card__price-label"]}>
          <span className={styles["card__price-figure"]}>{price}</span>
          <span className={styles["card__price-duration"]}>{duration}</span>
        </div>
        <p className={styles["card__benefits-label"]}>
          Everything in Free, Plus
        </p>
        <ul className={styles.card__benefits}>
          {benefits.map((benefit) => {
            return (
              <li className={`${styles.card__benefit} center-horizontal`}>
                <img
                  src="/icons/check-line.svg"
                  className={styles["card__benefit-icon"]}
                  alt=""
                />
                {benefit}
              </li>
            );
          })}
        </ul>
        <button className={styles.card__button}>Choose</button>
      </div>
    </div>
  );
}
