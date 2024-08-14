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

    async function handleInfo() {
        try {
            if (pass === confpass) {
                if (user, email, pass && confpass !== '') {
                    alert('Usuário cadastrado')
                } else {
                    alert('Usuário não cadastrado')
                }
            } else {
                alert('Senhas divergentes!')
            }
        } catch (error) {
            alert('Ocorreu um erro', error)
        } finally {
            if (user, email, pass && confpass !== '') {
                alert('Olá ' + user)
            }
        }
    }

    return (
        <section className='container-sign'>
            <img className="foto" src={foto} />

            <aside className="sign-content">
                <img src={logo} alt="logo" className="logo-sign" />
                <article className="box">
                    <h1>Sign Up</h1>

                    <form className="box-input">
                        <h2>{props.user}</h2>
                        <Input type='text' className='sign-input' placeholder='Enter your name' required disableUnderline value={user} onChange={(e) => setUser(e.target.value)} />
                    </form>

                    <form className="box-input">
                        <h2>{props.email}</h2>
                        <Input type='text' className='sign-input' placeholder='example@gmail.com' required disableUnderline value={email} onChange={(e) => setEmail(e.target.value)} />
                    </form>

                    <form className="box-input">
                        <h2>{props.pass}</h2>
                        <Input type='password' className='sign-input' placeholder='Set your password' autoComplete='string' required disableUnderline value={pass} onChange={(e) => setPass(e.target.value)} />
                    </form>

                    <form className="box-input">
                        <h2>{props.confirm}</h2>
                        <Input type='password' className='sign-input' placeholder='Repeat your password' autoComplete='string' required disableUnderline value={confpass} onChange={(e) => setConfpass(e.target.value)} />
                    </form>


                    <div className="btn-create">
                        <Button variant='outlined' onClick={handleInfo}><p>Create account</p></Button>
                    </div>
                    <article className='account'>
                        <p>Already have an account?</p>
                        <Link className="link-login" to={"/login"}>Login here</Link>
                    </article>
                </article>
            </aside>
        </section>
    )
}