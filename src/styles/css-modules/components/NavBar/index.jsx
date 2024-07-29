import styles from "./styles.module.css";
import { useState } from "react";
import { up, down } from "./svg/index";
import wing from "./svg/wing.png";
import { Link } from "react-router-dom";
import DropMenu from "../DropMenu/src";
import MenuIcon from "./svg/Menu";
import DropNav from "../DropNav";

export default function Navbar(props) {
  const [nav, setNav] = useState(false)
  const [visible, setVisible] = useState(false);
  const Angle = visible ? up : down;

  const handleNav = () => {
    setNav(!nav);

  };

  const handleAngle = () => {
    setVisible(!visible);
  };

  return (
    <>
      <section className={styles.container}>
        <a href="/">
          <img src={wing} alt="Logo" className={styles.logo} />
        </a>

        <button className={styles.btnMenu} onClick={handleNav}><MenuIcon /></button>

        {nav && <DropNav />}


        <div className={styles.column}>
          <article className={styles.links}>
            <Link className={styles.link} to={"/teams"}>{props.one}</Link>
            <Link className={styles.link} to={"/cep"}>{props.two}</Link>
            <Link className={styles.link} to={"/pokemon"}>{props.three}</Link>
            <Link className={styles.link} to={"/about"}>{props.four}</Link>
            <Link className={styles.menuDown} onClick={handleAngle}>
              {props.five}
              <img src={Angle} alt="angle" />
              {visible && <DropMenu />}
            </Link>
          </article>
          <article className={styles.buttons}>
            <Link className={styles.link} to={"/sign"}>{props.buttonOne}</Link>
            <Link className={styles.link} to={"/login"}>{props.buttonTwo}</Link>
          </article>
        </div>

      </section>
    </>
  );
}