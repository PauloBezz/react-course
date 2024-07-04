import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import DropMenu from '../DropMenu/src';
import { up, down } from "./assets/images/svg/index"

export default function DropNav() {
    const [visible, setVisible] = useState(false);
    const Angle = visible ? up : down;

    const handleAngle = () => {
        setVisible(!visible);
    };

    return (
        <>
            <div className={styles.column}>
                <div className={styles.links}>
                    <a className={styles.link} href={"/"}>Home</a>
                    <Link className={styles.link} to={"/teams"}>Teams</Link>
                    <Link className={styles.link} to={"/cep"}>CEP</Link>
                    <Link className={styles.link} to={"/pokemon"}>Pokemon</Link>
                    <Link className={styles.link} to={"/about"}>About</Link>
                    <Link className={styles.menuDown} onClick={handleAngle}>
                        More
                        <img src={Angle} alt="angle" />
                        {visible && <DropMenu />}
                    </Link>
                </div>
                <article className={styles.buttons}>
                    <Link className={styles.link} to={"/sign"}>Sign in</Link>
                    <Link className={styles.link} to={"/login"}>Login</Link>
                </article>
            </div>
        </>
    )
}