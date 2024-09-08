import styles from "./components/PricingCard/PricingCard.module.css";

export default function PricingCard({ label, priceLabel, image, imageAlt }) {
  return (
    <div className={styles.card}>
      <div className={`${styles.card__wrapper} center-vertical`}>
        <span className={styles.card__label}>{label}</span>
        <div className={styles.card__image}>
          <img src={image} alt={imageAlt} />
        </div>
        <span className={styles.card__priceLabel}>{priceLabel}</span>
        <p>Everything in Free, Plus</p>
        <ul className={styles.card__benefits}>
          <li className={styles.card__benefit}>Up to 10 Users</li>
          <li className={styles.card__benefit}>Email Support, Call Support</li>
          <li className={styles.card__benefit}> 1 Year Access</li>
        </ul>
        <button className={styles.card__button}>Choose</button>
      </div>
    </div>
  );
}
