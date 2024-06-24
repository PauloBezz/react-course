import styles from "./styles.module.css";
import { useState } from "react";
import { up, down } from "./svg/index";
import wing from "./svg/wing.png";
import { Link } from "react-router-dom";
import DropMenu from "../DropMenu/src";

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
          <Link className={styles.link} to={"/pokemon"}>{props.three}</Link>
          <Link className={styles.link} to={"/about"}>{props.four}</Link>
          <Link className={styles.menuDown} onClick={handleAngle}>
            {props.five}
            <img src={Angle} alt="angle" />
            {visible && <DropMenu />}
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link className={styles.link} to={"/sign"}>{props.buttonOne}</Link>
          <Link className={styles.link} to={"/login"}>{props.buttonTwo}</Link>
        </div>
      </div>
    </div>
  );
}