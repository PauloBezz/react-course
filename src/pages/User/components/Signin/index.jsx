import { Button, Input } from "@mui/material";
import { Link } from "react-router-dom";
import foto from '../../assets/images/svg/foto.svg';
import logo from '../../assets/images/svg/leon-logo.svg'
import './styles.css'

export default function Signin(props) {
    return (
            <section className='container-sign'>
                <img className="foto" src={foto} />
                <article className="content">
                    <img src={logo} alt="logo" className="logo"/>
                    <div className="box">
                        <h1>Sign Up</h1>

                        <div className="sign-input">
                            <h2>{props.user}</h2>
                            <Input />
                        </div>

                        <div className="sign-input">
                            <h2>{props.email}</h2>
                            <Input />
                        </div>

                        <div className="sign-input">
                            <h2>{props.pass}</h2>
                            <Input />
                        </div>

                        <div className="sign-input">
                            <h2>{props.confirm}</h2>
                            <Input />
                        </div>

                        <Button className="btn-create"><p>Create account</p></Button>
                        <div>
                            <p>Already have an account?</p>
                            <Link className="link-login" to={"/login"}>Login here</Link>
                        </div>
                    </div>
                </article>
            </section>
    )
}