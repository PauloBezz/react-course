import './styles.css'
import { Button, Input } from "@mui/material";
import { Link } from "react-router-dom";
import foto from '../../assets/images/svg/foto.svg';
import logo from '../../assets/images/svg/leon-logo.svg'
import { useState } from 'react';

export default function Signin(props) {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confpass, setConfpass] = useState('')

    const handleInfo = () => {

        
    }

    return (
        <section className='container-sign'>
            <img className="foto" src={foto} />
            <div className="sign-content">
                <img src={logo} alt="logo" className="logo" />
                <article className="box">
                    <h1>Sign Up</h1>

                    <article className="box-input">
                        <h2>{props.user}</h2>
                        <Input type='text' required disableUnderline className='sign-input' value={user} onChange={(e) => setUser(e.target.value)} />
                    </article>

                    <article className="box-input">
                        <h2>{props.email}</h2>
                        <Input type='text' required disableUnderline className='sign-input' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </article>

                    <article className="box-input">
                        <h2>{props.pass}</h2>
                        <Input type='password' required disableUnderline className='sign-input' value={pass} onChange={(e) => setPass(e.target.value)} />
                    </article>

                    <article className="box-input">
                        <h2>{props.confirm}</h2>
                        <Input type='password' required disableUnderline className='sign-input' value={confpass} onChange={(e) => setConfpass(e.target.value)}/>
                    </article>

                    <Button className="btn-create"><p>Create account</p></Button>
                    <article>
                        <p>Already have an account?</p>
                        <Link className="link-login" to={"/login"}>Login here</Link>
                    </article>
                </article>
            </div>
        </section>
    )
}