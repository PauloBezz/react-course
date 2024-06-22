import styles from "./styles.module.css";
import wing from "./svg/wing.png";
import { useState } from "react";
import { up, down } from "./svg/index";
import DropMenu from "../DropMenu/src";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [visible, setVisible] = useState();
  const Angle = visible ? up : down;

  const handleAngle = () => {
    setVisible(!visible);
  };

  return (
    <div className={styles.container}>
      <img src={wing} alt="Logo" className={styles.logo} />
      <div className={styles.column}>
        <div className={styles.links}>
          <Link className={styles.link} to={"/teams"}>{props.one}</Link>
          <Link className={styles.link} to={"/cep"}>{props.two}</Link>
          <Link className={styles.link} to={"/login"}>{props.three}</Link>
          <Link className={styles.link} to={"/pokemon"}>{props.four}</Link>
          <Link className={styles.menuDown} onClick={handleAngle}>
            {props.five}
            <img src={Angle} alt="angle" />
            {visible && <DropMenu />}
          </Link>
        </div>
        <div className={styles.buttons}>
          <button>{props.buttonOne}</button>
          <button>{props.buttonTwo}</button>
        </div>
      </div>
    </div>
  );
}