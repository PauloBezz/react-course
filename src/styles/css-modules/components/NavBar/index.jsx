import styles from "./styles.module.css";
import wing from "./svg/wing.png";

export default function NavBar(props) {
  return (
    <div className={styles.container}>
      <img src={wing} alt="Logo" className={styles.logo} />
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>{props.one}</li>
          <li>{props.two}</li>
          <li>{props.three}</li>
          <li>{props.four}</li>
        </ul>
      </nav>
      <div className={styles.buttons}>
        <button>{props.button}</button>
        <button>{props.buttontwo}</button>
      </div>
    </div>
  );
}