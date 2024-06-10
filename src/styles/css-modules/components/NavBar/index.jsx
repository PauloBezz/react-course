import styles from "./styles.module.css";
import wing from "./svg/wing.png";
import { useState } from "react";
import { up, down } from "./svg/index";
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
          <button>{props.one}</button>
          <button>{props.two}</button>
          <button>{props.three}</button>
          <button className={styles.menuDown} onClick={handleAngle}>
            {props.four}
            <img src={Angle} alt="angle" />
            {visible && <DropMenu />}
          </button>
        </div>
        <div className={styles.buttons}>
          <button>{props.buttonOne}</button>
          <button>{props.buttonTwo}</button>
        </div>
      </div>
    </div>
  );
}